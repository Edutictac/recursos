#!/usr/bin/env python3
"""
Genera title_en i notes_en (traducció a l'anglès) per a les activitats del
catàleg legacy que tenen títol/descripció en castellà o català i no tenen
encara versió anglesa.

Motor: API de DeepSeek (deepseek-chat). La clau es llig de DEEPSEEK_API_KEY
o de ~/.config/headroom/deepseek.env.

Abast: es tradueixen totes les entrades amb títol no buit que no siguen ja en
anglès. S'exclouen les etiquetades Inglés/Inglés (ja en anglès) i Aranes.
"""

import json
import os
import sys
import time
import urllib.request
import urllib.error

GAMES_PATH = "data/games.json"
MODEL = "deepseek-chat"
BATCH_SIZE = 15
API_URL = "https://api.deepseek.com/chat/completions"

SKIP_LANGS = {"Ingles", "Inglés", "Aranes"}


def looks_english(text):
    if not text:
        return False
    t = text.lower()
    ca_es_markers = ['à', 'è', 'ï', 'ò', 'ç', 'ñ', 'á', 'é', 'í', 'ó', 'ú',
                     'ació', 'ción', 'juego', 'juegos', 'activitat', 'activitats',
                     'actividad', 'actividades', 'para ', 'amb ', 'per a ']
    return not any(m in t for m in ca_es_markers)


def game_langs(game):
    raw = game.get('language')
    vals = raw if isinstance(raw, list) else [raw]
    return {str(v).strip() for v in vals if v}


def need_title(game):
    if (game.get('title_en') or '').strip():
        return False
    title = (game.get('title') or '').strip()
    if not title:
        return False
    langs = game_langs(game)
    if langs and langs <= SKIP_LANGS:
        return False
    if not langs:
        return not looks_english(title)
    return True


def need_notes(game):
    if (game.get('notes_en') or '').strip():
        return False
    notes = (game.get('notes') or '').strip()
    if not notes:
        return False
    langs = game_langs(game)
    if langs and langs <= SKIP_LANGS:
        return False
    if not langs:
        return not looks_english(notes)
    return True


def load_key():
    k = os.environ.get('DEEPSEEK_API_KEY')
    if k:
        return k
    env = os.path.expanduser('~/.config/headroom/deepseek.env')
    if os.path.exists(env):
        for line in open(env, encoding='utf-8'):
            line = line.strip()
            if '=' in line and not line.startswith('#'):
                key, val = line.split('=', 1)
                if key in ('DEEPSEEK_API_KEY', 'api_key', 'API_KEY'):
                    return val.strip()
    sys.exit("Error: cal DEEPSEEK_API_KEY o ~/.config/headroom/deepseek.env")


def translate_batch(api_key, items):
    payload = {
        "model": MODEL,
        "max_tokens": 2048,
        "temperature": 0.2,
        "messages": [{
            "role": "user",
            "content": (
                "Translate to English these titles and descriptions of "
                "educational school activities.\n"
                "Return ONLY a JSON array, in the same order, with the format:\n"
                "[{\"i\": 0, \"title_en\": \"...\", \"notes_en\": \"...\"}]\n"
                "Rules:\n"
                "- If the text is already in English, keep it.\n"
                "- If \"notes\" is empty or absent, set notes_en to an empty string.\n"
                "- Natural register, suitable for school activities.\n\n"
                "Input:\n" + json.dumps(items, ensure_ascii=False)
            ),
        }],
    }
    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(
        API_URL, data=data, method='POST',
        headers={
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + api_key,
        },
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        body = json.loads(resp.read().decode('utf-8'))
    text = body['choices'][0]['message']['content'].strip()
    start = text.find('[')
    end = text.rfind(']') + 1
    if start == -1 or end == 0:
        raise ValueError('JSON no trobat en la resposta: ' + text[:200])
    return json.loads(text[start:end])


def main():
    api_key = load_key()
    limit = int(sys.argv[1]) if len(sys.argv) > 1 else None
    games = json.load(open(GAMES_PATH, encoding='utf-8'))

    to_do = []
    for i, g in enumerate(games):
        if need_title(g) or need_notes(g):
            to_do.append((i, g))

    if limit is not None:
        to_do = to_do[:limit]

    print(f"Activitats a traduir: {len(to_do)}")
    if not to_do:
        print("Res a fer.")
        return

    done = 0
    for start_idx in range(0, len(to_do), BATCH_SIZE):
        batch = to_do[start_idx:start_idx + BATCH_SIZE]
        items = []
        for j, (_, g) in enumerate(batch):
            item = {"i": j, "title": g.get('title', '')}
            if (g.get('notes') or '').strip():
                item["notes"] = g['notes']
            items.append(item)

        for attempt in range(3):
            try:
                results = translate_batch(api_key, items)
                break
            except Exception as e:
                print(f"  Error lot {start_idx // BATCH_SIZE + 1} (intent {attempt + 1}): {e}")
                results = None
                time.sleep(3)
        if results is None:
            print(f"  Lot {start_idx // BATCH_SIZE + 1} descartat, continua…")
            continue

        for res in results:
            j = res.get('i')
            if j is None:
                continue
            idx = batch[j][0]
            g = games[idx]
            if 'title_en' in res and res['title_en']:
                g['title_en'] = res['title_en']
            if 'notes_en' in res:
                g['notes_en'] = res.get('notes_en') or ''
            done += 1

        with open(GAMES_PATH, 'w', encoding='utf-8') as f:
            json.dump(games, f, ensure_ascii=False, indent=1)
        print(f"  Lot {start_idx // BATCH_SIZE + 1} OK ({len(batch)} items)")
        time.sleep(0.3)

    print(f"Traduccions aplicades: {done}")


if __name__ == '__main__':
    main()

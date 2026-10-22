"""Package only the static application, leaving production catalogues/media intact."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil

FILES = (
    'index.html', 'jclic.html', 'favicon.ico', 'manifest.json',
    'robots.txt', 'sitemap.xml', 'sw.js', 'LICENSE',
)
PATTERNS = (
    'scripts/*.js', 'styles/*.css', 'assets/brand/*', 'assets/fonts/*',
    'assets/ui/catalogue.js', 'assets/ui/licenses/*',
)
SHARED = (
    'data', 'reports', 'assets/game-images', 'assets/flash',
    'assets/ruffle', 'assets/jclic',
)


def package(source, output):
    source, output = Path(source).resolve(), Path(output).absolute()
    if output.exists() or source == output or source in output.parents:
        raise ValueError('Use a new output directory outside the source tree')
    selected = {source / name for name in FILES}
    for pattern in PATTERNS:
        matches = set(source.glob(pattern))
        if not matches:
            raise ValueError(f'Missing application files: {pattern}')
        selected.update(matches)
    manifest = {}
    # Validate everything before creating a release.
    for path in sorted(selected):
        if not path.is_file() or path.is_symlink() or source not in path.resolve().parents:
            raise ValueError(f'Invalid application file: {path.relative_to(source)}')
        manifest[path.relative_to(source).as_posix()] = hashlib.sha256(path.read_bytes()).hexdigest()
    output.mkdir(parents=True)
    for name in manifest:
        destination = output / name
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source / name, destination)
        destination.chmod(0o644)
    (output / 'frontend-manifest.json').write_text(json.dumps({
        'files': manifest, 'shared_paths': list(SHARED),
    }, indent=2) + '\n')
    return manifest


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument('--output', type=Path, required=True)
    args = parser.parse_args()
    print(json.dumps({'packaged_files': len(package(args.source, args.output))}))

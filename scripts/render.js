export function clearSelect(select) {
  select.querySelectorAll("option:not([value=''])").forEach((o) => o.remove());
}

export function fillSelect(select, values, formatLabel = (v) => v) {
  for (const value of values) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = formatLabel(value);
    select.append(option);
  }
}

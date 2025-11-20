export function removeRomanianDiacritics(text = ''): string {
  if (typeof text !== 'string') return '';

  const map: Record<string, string> = {
    ă: 'a',
    Ă: 'A',
    â: 'a',
    Â: 'A',
    î: 'i',
    Î: 'I',
    ș: 's',
    Ș: 'S',
    ţ: 't',
    Ț: 'T',
    ť: 't',
    ț: 't',
  };

  return text
    .split('')
    .map((ch) => map[ch] ?? ch)
    .join('');
}

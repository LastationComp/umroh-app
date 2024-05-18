export function Clamping(string: string, char: number) {
  if (string.length < char) return string;
  return string.slice(0, char ?? 50).trim() + '...';
}

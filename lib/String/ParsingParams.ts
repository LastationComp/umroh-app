export default function ParsingParams(value: string) {
  if (!value) return "";

  return `?${value}`;
}


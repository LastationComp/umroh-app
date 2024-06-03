export function inputName(...values: any[]) {
  let result = values[0];

  if (values)
    values.forEach((val, index) => {
      if (index === 0) return;
      result += `[${val}]`;
    });

  return result;
}

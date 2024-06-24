export function createQueryParams(object: any) {
  const keys = Object.keys(object);

  const resultQuery = "?";
  const queryArray: any[] = [];
  keys.forEach((key) => {
    if (!object[key]) return;
    const valueKey: string = object[key];
    if (!valueKey) return;
    const concatQuery = `${key}=${String(valueKey).replaceAll(" ", "+")}`;
    queryArray.push(concatQuery);
  });

  return resultQuery + queryArray.join("&");
}

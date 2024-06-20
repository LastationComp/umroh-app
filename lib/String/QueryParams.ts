export function createQueryParams(object: any) {
  const keys = Object.keys(object);

  const resultQuery = "?";
  const queryArray: any[] = [];
  keys.forEach((key) => {
    if (!object[key]) return;
    const concatQuery = `${key}=${object[key]}`;
    queryArray.push(concatQuery);
  });

  return resultQuery + queryArray.join("&");
}

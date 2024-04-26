export function dashboardMiddleware(pathname: string, paths: string[]) {
  let authorization = false;

  paths.forEach((path) => {
    authorization = pathname.startsWith('/dashboard' + path);

    if (authorization) return false;
  });

  return authorization;
}

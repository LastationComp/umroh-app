export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const apiFetch = (url: string, token: string, method: string = 'GET', body: any = {}, headers: any = {}) => {
  if (method === 'POST')
    return fetch(process.env.NEXT_PUBLIC_URL_API + url, {
      method: method,
      headers: {
        Authorization: 'Bearer ' + token,
        ...headers,
        Accept: 'application/json',
      },
      body: body,
      credentials: 'include',
      cache: 'no-store',
    });

  return fetch(process.env.NEXT_PUBLIC_URL_API + url, {
    method: method,
    headers: {
      Authorization: 'Bearer ' + token,
    },
    credentials: 'include',
    cache: 'no-store',
  });
};

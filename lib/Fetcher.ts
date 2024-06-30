export const fetcher = (url: string) => fetch(url).then((res) => res.json());

type apiFetchProps = {
  url: string;
  token: string;
  method?: 'GET' | 'POST' | 'DELETE';
  body?: any;
  headers?: any;
  options?: {
    tag?: string[];
    cache?: boolean;
  };
};

type oldFetchProps = {
  tag: string[];
};

export const newApiFetch = ({ url, token, method = 'GET', body, headers, options }: apiFetchProps) => {
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
      cache: options?.cache ? 'default' : 'no-store',
      next: {
        tags: options?.tag ?? [],
      },
    });

  return fetch(process.env.NEXT_PUBLIC_URL_API + url, {
    method: method,
    headers: {
      Authorization: 'Bearer ' + token,
    },
    credentials: 'include',
    // cache: !options?.cache ? 'no-store' : 'default',
    cache: 'no-store',
    next: {
      tags: options?.tag ?? undefined,
    },
  });
};

export const apiFetch = (url: string, token: string = '', method: string = 'GET', body: any = {}, headers: any = {}, options: oldFetchProps = { tag: [] }) => {
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
      next: {
        tags: options.tag ?? [],
      },
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

import { isArray, isObject } from 'util';

export function responseSuccess(message: any) {
  return Response.json({
    success: true,
    type: 'success',
    message: message,
  });
}

export function responseError(message: any, code: number = 400) {
  return Response.json(
    {
      success: false,
      type: 'error',
      message: message,
    },
    {
      status: code,
    }
  );
}

export function responseData(data: any) {
  if (isObject(data)) return Response.json(data);
  return Response.json({
    success: true,
    type: 'success',
    data: data,
  });
}

export interface ResponseBase<T = Record<string, unknown>> {
  code: number;

  msg?: string | undefined | null;

  data?: T;

  status: boolean;
}

export interface ParamsNetwork {
  url: string;
  params?: Record<string, string | number>;
  query?: Record<string, string | number>;
  path?: Record<string, string | number>;
  body?: Record<string, unknown>;
}

export enum SLICE_NAME {
  APP = 'APP_',
  LOGIN = 'LOGIN_',
  GET_IMAGE = 'GET_IMAGE',
}

export type ValidateMessageObject = {
  keyT: string;
  optionsTx?: Record<string, string | number>;
  options?: Record<string, string | number>;
};

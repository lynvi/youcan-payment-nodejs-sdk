export interface IResponse {
  data: any;
  err: IError;
}

export interface IError {
  code: number;
  message: string;
}

export interface HTTPAdapter {
  post(url: string, data: any): Promise<IResponse>;
}

export interface IToken {
  id: string;
}

import { IResponse } from '../interfaces/global';

export class InvalidResponseError extends Error {
  private responseBody: string;
  private responseStatus: number;

  constructor(response: IResponse) {
    super(response.err.message);
    this.responseBody = response.err.message;
    this.responseStatus = response.err.code;
  }

  public getResponseBody(): string {
    return this.responseBody;
  }

  public getResponseStatus(): number {
    return this.responseStatus;
  }
}

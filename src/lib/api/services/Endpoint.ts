import { BASE_URL } from '../constants';

export class Endpoint {
  private isSandboxMode: boolean;
  constructor(isSandboxMode: boolean) {
    this.isSandboxMode = isSandboxMode;
  }

  public getBaseUrl(): string {
    return `${BASE_URL}${
      this.isSandboxMode?.toString() === 'false' ? 'api/' : 'sandbox/api/'
    }`;
  }
}

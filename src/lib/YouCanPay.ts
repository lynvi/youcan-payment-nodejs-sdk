import { AxiosAdapter } from './api/http/AxiosAdapter';
import { IToken } from './api/interfaces/global';
import { TokenEndpoint } from './api/services/TokenEndpoint';
import { TokenInput } from './models/Token';

export class YouCanPay {
  private privateKey: string;
  private isSandBoxMode: boolean = false;
  constructor(privateKey: string, isSandBoxMode: boolean) {
    this.privateKey = privateKey;
    this.isSandBoxMode = isSandBoxMode;
  }

  public async getToken(data: TokenInput): Promise<IToken> {
    const payload = { ...data, pri_key: this.privateKey };
    const axiosAdapter = new AxiosAdapter();

    const tokenEndpoint = new TokenEndpoint(
      this.isSandBoxMode,
      axiosAdapter,
      payload
    );

    return await tokenEndpoint.call();
  }
}

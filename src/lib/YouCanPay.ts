import { BASE_URL } from './api/constants';
import { Lang } from './api/enums/lang.enum';
import { AxiosAdapter } from './api/http/AxiosAdapter';
import { IToken } from './api/interfaces/global';
import { TokenEndpoint } from './api/services/TokenEndpoint';
import { TokenInput } from './models/Token';

export class YouCanPay {
  private privateKey: string;
  private isSandBoxMode = false;
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

  public async getPaymentUrl(data: TokenInput, lang: Lang): Promise<string> {
    const payload = { ...data, pri_key: this.privateKey };
    const axiosAdapter = new AxiosAdapter();

    const tokenEndpoint = new TokenEndpoint(
      this.isSandBoxMode,
      axiosAdapter,
      payload
    );

    const token = await tokenEndpoint.call();

    return `${BASE_URL}${this.isSandBoxMode ? 'sandbox/' : ''}payment-form/${
      token.id
    }?lang=${lang}`;
  }
}

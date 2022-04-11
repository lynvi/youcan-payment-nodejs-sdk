import { TokenInput } from '../../models/Token';
import { InvalidResponseError } from '../exceptions/InvalidResponseException';
import { HTTPAdapter } from '../interfaces/global';
import { Endpoint } from './Endpoint';

export class TokenEndpoint extends Endpoint {
  private provider: HTTPAdapter;
  private payload: TokenInput;
  constructor(
    isSandboxMode: boolean,
    provider: HTTPAdapter,
    payload: TokenInput
  ) {
    super(isSandboxMode);
    this.provider = provider;
    this.payload = payload;
  }

  public async call() {
    const response = await this.provider.post(
      `${this.getBaseUrl()}tokenize/`,
      this.payload
    );
    if (response.err) {
      throw new InvalidResponseError(response);
    }
    return {
      id: response.data.token.id,
    };
  }
}

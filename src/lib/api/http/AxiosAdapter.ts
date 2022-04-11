import axios, { AxiosError } from 'axios';

import { HTTPAdapter, IResponse } from '../interfaces/global';

export class AxiosAdapter implements HTTPAdapter {
  public async post(url: string, data: any): Promise<IResponse> {
    try {
      const response = await axios.post(url, data);
      return {
        data: response.data,
        err: null,
      };
    } catch (err: any | AxiosError) {
      const error: AxiosError = err;
      return {
        data: null,
        err: {
          code: +error.code,
          message: error.response.data?.message,
        },
      };
    }
  }
}

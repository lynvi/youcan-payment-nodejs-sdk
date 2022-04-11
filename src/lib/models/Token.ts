import { CurrencyCode } from '../api/enums/currency.enum';
import { Customer } from './Customer';

export class TokenInput {
  order_id: string;
  amount: number;
  currency: CurrencyCode;
  customer_ip: string;
  success_url: string;
  error_url?: string;
  customerInfo?: Customer;
}

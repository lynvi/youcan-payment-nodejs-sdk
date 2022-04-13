# youcan-payment-nodejs-sdk

This package allows the developer to interact easily with the YouCan Pay API. (this package is in early development)

<p align="center"><a href="https://youcanpay.com" target="_blank"><img style="margin-right:30px" src="https://youcanpay.com/images/ycpay-logo.svg" width="300"><img
height="150"  src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" /></a></p>

<p align="center">
   <a href="https://www.npmjs.com/package/youcan-payment-nodejs-sdk"><img src="https://img.shields.io/npm/v/youcan-payment-nodejs-sdk.svg"  
                                                       alt="NPM Version"></a>
   <a href="https://codecov.io/gh/iamkun/dayjs"><img
            src="https://img.shields.io/codecov/c/github/iamkun/dayjs/master.svg?style=flat-square" alt="Codecov"></a>
    <a href="https://github.com/iamkun/dayjs/blob/master/LICENSE"><img
            src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="License"></a>
</p>

This package allows the developer to interact easily with the [YouCan Pay API](https://youcanpay.com/docs).

This documentation is separated in two integrations: **Default Integration** and the **Standalone Integration**.
you have the choice to do one integration or both integrations in your checkout page.

## YouCan Pay SDK Setup

Instructions for adding the YouCan Pay SDK to your NodeJS Applications.

### Quick start

```shell
yarn add youcan-payment-nodejs-sdk
```

```typescript
const youCanPayment = new YouCanPay(
  'pri_sandbox_72c4f469-afeb-4eed-b840-9c0c9', // you can private key
  true // is sandbox mode
);
const token = await youCanPayment.getToken({
  amount: 2000, //required
  currency: CurrencyCode.MAD, //required
  customer_ip: '127.0.0.1', //required
  order_id: 'XXXXXX', //required
  success_url: 'https://yourdomain.com/orders-status/success', //required
  error_url: 'https://yourdomain.com/orders-status/error', //optional
  customerInfo: {
    name: '',
    address: '',
    zip_code: '',
    city: '',
    state: '',
    country_code: '',
    phone: '',
    email: '',
  }, //optional
});

console.log(token.id); // 71d8c27-2416-41ee-b750-d6382f72a565
```

### YouCan Pay: Standalone Integration

```typescript
const youCanPayment = new YouCanPay(
  'pri_sandbox_72c4f469-afeb-4eed-b840-9c0c9',
  true
);
const paymentUrl = await youCanPayment.getPaymentUrl(
  {
    amount: 2000,
    currency: CurrencyCode.MAD,
    customer_ip: '127.0.0.1',
    order_id: 'XXXXXX',
    success_url: 'https://yourdomain.com/orders-status/success',
    error_url: 'https://yourdomain.com/orders-status/error',
  },
  Lang.AR
);
console.log(paymentUrl); // https://youcanpay.com/sandbox/payment-form/1bd269e0-62d9-4a37-822c-191b28d7af5c?lang=ar
```

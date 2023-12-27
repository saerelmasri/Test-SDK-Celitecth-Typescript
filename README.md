# Celitech Typescript SDK 1.1.4
The Typescript SDK for Celitech.
- API version: 1.1.4
- SDK version: 1.1.4
## Table of Contents
- [About the API](#requirements)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoint Services](#api-endpoint-services)
- [API Models](#api-models)
- [Sample Usage](#sample-usage)
- [Celitech Services](#celitech-services)
- [License](#license)
## About the API
Welcome to the CELITECH API documentation!  Useful links: [Homepage](https://www.celitech.com) | [Support email](mailto:support@celitech.com) | [Blog](https://www.celitech.com/blog/)  # Introduction  This guide is your go-to resource for the CELITECH API, with full documentation and schemas.  Need help? Email us at support@celitech.com.   Partners  refers to online service providers that use our eSIM API. Access levels include Gold, Platinum, and Diamond.  ## API  The CELITECH API is designed for use by partner platforms, including both web and mobile applications. It's assumed all endpoint calls are initiated from the backend of an integrated platform.  API URL: `https://api.celitech.net/v1`  ## Authentication & Authorization CELITECH API uses the OAuth 2.0 protocol for authentication and authorization. The endpoints are protected using client credentials flow which is based on a token exchange. The token has a defined life span (typically 1 hour), after which a new token must be obtained.  To begin, obtain OAuth 2.0 client credentials ( **CLIENT_ID** & **CLIENT_SECRET** ) from the [CELITECH Dashboard](https://www.dashboard.celitech.com/). Then your client application requests an access token from the CELITECH Authorization Server, extracts a token from the response, and sends the token to the CELITECH API that you want to access.  Security Scheme Type: `OAuth2`  Flow type: `clientCredentials`  Token URL: `https://auth.celitech.net/oauth2/token` 
## Installation
```sh
npm install test-celitech-liblab  
```
## Environment Variables

You will need the following environment variables in order to access all the features of this SDK:

| Name    | Description  |
| :-------- | :----------|
| CLIENT_ID | Client ID parameter |
| CLIENT_SECRET | Client Secret parameter |

You can set these environment variables on the command line or you can use
whatever tooling your project has in place to manage environment variables. If
you are using a `.env` file, we have provided a template with the variable names
in the `.env.example` file in the same directory as this readme.

## Sample Usage
Here is a simple program demonstrating usage of this SDK. It can also be found in the `examples/src/index.ts` file in this directory.

When running the sample make sure to use `npm install` to install all the dependencies.

```Typescript
import { Celitech } from 'test-celitech-liblab';


const sdk = new Celitech();

(async () => {
  const result = await sdk.destinations
    .listDestinations();
  console.log(result);
})();
 

```
# Celitech Services
A list of all services and services methods.
- Services

    - [Destinations](#destinations)

    - [Packages](#packages)

    - [Purchases](#purchases)

    - [ESim](#esim)
- [All Methods](#all-methods)


## Destinations

| Method    | Description|
| :-------- | :----------|
| [listDestinations](#listdestinations) | List Destinations |


## Packages

| Method    | Description|
| :-------- | :----------|
| [listPackages](#listpackages) | List Packages |


## Purchases

| Method    | Description|
| :-------- | :----------|
| [createPurchase](#createpurchase) | Create Purchase |
| [listPurchases](#listpurchases) | List Purchases |
| [topUpEsim](#topupesim) | Top-up eSIM |
| [editPurchase](#editpurchase) | Edit Purchase |
| [getPurchaseConsumption](#getpurchaseconsumption) | Get Purchase Consumption |


## ESim

| Method    | Description|
| :-------- | :----------|
| [getEsim](#getesim) | Get eSIM Status |
| [getEsimDevice](#getesimdevice) | Get eSIM Device |
| [getEsimHistory](#getesimhistory) | Get eSIM History |
| [getEsimMac](#getesimmac) | Get eSIM MAC |




## All Methods


### **listDestinations**
List Destinations
- HTTP Method: GET
- Endpoint: /destinations


**Return Type**

ListDestinationsResponse

**Example Usage Code Snippet**
```Typescript
import { Celitech } from 'test-celitech-liblab';

const sdk = new Celitech();

(async () => {
  const result = await sdk.destinations.listDestinations();
  console.log(result);
})();

```


### **listPackages**
List Packages
- HTTP Method: GET
- Endpoint: /packages


**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| destination | string |  |
| startDate | string |  |
| endDate | string |  |
| afterCursor | string |  |
| limit | number |  |
| startTime | number |  |
| endTime | number |  |
| duration | number |  |


**Return Type**

ListPackagesResponse

**Example Usage Code Snippet**
```Typescript
import { Celitech } from 'test-celitech-liblab';

const sdk = new Celitech();

(async () => {
  const result = await sdk.packages.listPackages({
    destination: 'FRA',
    startDate: '2023-11-01',
    endDate: '2023-11-20',
    afterCursor:
      'Y3JlYXRlZEF0OjE1OTk0OTMwOTgsZGVzdGluYXRpb246QVVTLG1pbkRheXM6MCxkYXRhTGltaXRJbkJ5dGVzOjUzNjg3MDkxMjA',
    limit: 20,
    startTime: -76961546,
    endTime: -29752890,
    duration: -4346436.358061105,
  });
  console.log(result);
})();

```


### **createPurchase**
Create Purchase
- HTTP Method: POST
- Endpoint: /purchases

**Required Parameters**

| input | object | Request body. |



**Return Type**

CreatePurchaseResponse

**Example Usage Code Snippet**
```Typescript
import { Celitech } from 'test-celitech-liblab';

const sdk = new Celitech();

(async () => {
  const input = {
    dataLimitInGB: 1,
    destination: 'FRA',
    email: 'example@domain.com',
    endDate: '2023-11-20',
    endTime: 65060508.12098119,
    networkBrand: 'CELITECH',
    startDate: '2023-11-01',
    startTime: 44292177.14455739,
  };
  const result = await sdk.purchases.createPurchase(input);
  console.log(result);
})();

```

### **listPurchases**
List Purchases
- HTTP Method: GET
- Endpoint: /purchases


**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| iccid | string |  |
| afterDate | string | Start date of the interval for filtering purchases in the format 'yyyy-MM-dd' |
| beforeDate | string | End date of the interval for filtering purchases in the format 'yyyy-MM-dd' |
| afterCursor | string |  |
| limit | number |  |
| after | number | Epoch value representing the start of the time interval for filtering purchases |
| before | number | Epoch value representing the end of the time interval for filtering purchases |


**Return Type**

ListPurchasesResponse

**Example Usage Code Snippet**
```Typescript
import { Celitech } from 'test-celitech-liblab';

const sdk = new Celitech();

(async () => {
  const result = await sdk.purchases.listPurchases({
    iccid: '1111222233334444555',
    afterDate: '2023-11-01',
    beforeDate: '2023-11-20',
    afterCursor:
      'Y3JlYXRlZEF0OjE1OTk0OTMwOTgsZGVzdGluYXRpb246QVVTLG1pbkRheXM6MCxkYXRhTGltaXRJbkJ5dGVzOjUzNjg3MDkxMjA',
    limit: 20,
    after: 74603271.20233908,
    before: -18486218.409088016,
  });
  console.log(result);
})();

```

### **topUpEsim**
Top-up eSIM
- HTTP Method: POST
- Endpoint: /purchases/topup

**Required Parameters**

| input | object | Request body. |



**Return Type**

TopUpEsimResponse

**Example Usage Code Snippet**
```Typescript
import { Celitech } from 'test-celitech-liblab';

const sdk = new Celitech();

(async () => {
  const input = {
    dataLimitInGB: 1,
    email: 'example@domain.com',
    endDate: '2023-11-20',
    endTime: 12735879.536412537,
    iccid: '1111222233334444555',
    startDate: '2023-11-01',
    startTime: 53205550.517988205,
  };
  const result = await sdk.purchases.topUpEsim(input);
  console.log(result);
})();

```

### **editPurchase**
Edit Purchase
- HTTP Method: POST
- Endpoint: /purchases/edit

**Required Parameters**

| input | object | Request body. |



**Return Type**

EditPurchaseResponse

**Example Usage Code Snippet**
```Typescript
import { Celitech } from 'test-celitech-liblab';

const sdk = new Celitech();

(async () => {
  const input = {
    endDate: '2023-11-20',
    endTime: 79432869.33388838,
    purchaseId: 'ae471106-c8b4-42cf-b83a-b061291f2922',
    startDate: '2023-11-01',
    startTime: 56006785.134935945,
  };
  const result = await sdk.purchases.editPurchase(input);
  console.log(result);
})();

```

### **getPurchaseConsumption**
Get Purchase Consumption
- HTTP Method: GET
- Endpoint: /purchases/{purchaseId}/consumption

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| purchaseId | string |  |



**Return Type**

GetPurchaseConsumptionResponse

**Example Usage Code Snippet**
```Typescript
import { Celitech } from 'test-celitech-liblab';

const sdk = new Celitech();

(async () => {
  const result = await sdk.purchases.getPurchaseConsumption('4973fa15-6979-4daa-9cf3-672620df819c');
  console.log(result);
})();

```


### **getEsim**
Get eSIM Status
- HTTP Method: GET
- Endpoint: /esim

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| iccid | string |  |



**Return Type**

GetEsimResponse

**Example Usage Code Snippet**
```Typescript
import { Celitech } from 'test-celitech-liblab';

const sdk = new Celitech();

(async () => {
  const result = await sdk.eSim.getEsim('1111222233334444555');
  console.log(result);
})();

```

### **getEsimDevice**
Get eSIM Device
- HTTP Method: GET
- Endpoint: /esim/{iccid}/device

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| iccid | string |  |



**Return Type**

GetEsimDeviceResponse

**Example Usage Code Snippet**
```Typescript
import { Celitech } from 'test-celitech-liblab';

const sdk = new Celitech();

(async () => {
  const result = await sdk.eSim.getEsimDevice('1111222233334444555');
  console.log(result);
})();

```

### **getEsimHistory**
Get eSIM History
- HTTP Method: GET
- Endpoint: /esim/{iccid}/history

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| iccid | string |  |



**Return Type**

GetEsimHistoryResponse

**Example Usage Code Snippet**
```Typescript
import { Celitech } from 'test-celitech-liblab';

const sdk = new Celitech();

(async () => {
  const result = await sdk.eSim.getEsimHistory('1111222233334444555');
  console.log(result);
})();

```

### **getEsimMac**
Get eSIM MAC
- HTTP Method: GET
- Endpoint: /esim/{iccid}/mac

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| iccid | string |  |



**Return Type**

GetEsimMacResponse

**Example Usage Code Snippet**
```Typescript
import { Celitech } from 'test-celitech-liblab';

const sdk = new Celitech();

(async () => {
  const result = await sdk.eSim.getEsimMac('1111222233334444555');
  console.log(result);
})();

```




## License
License: MIT. See license in LICENSE.


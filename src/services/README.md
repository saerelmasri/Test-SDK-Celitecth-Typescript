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
    startTime: 83602190,
    endTime: 77026746,
    duration: -2537716.426501915,
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
    endTime: 74033706.81067756,
    networkBrand: 'CELITECH',
    startDate: '2023-11-01',
    startTime: 96928283.28731489,
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
    after: 63893039.48393628,
    before: 34173012.40462902,
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
    endTime: 11752626.306001663,
    iccid: '1111222233334444555',
    startDate: '2023-11-01',
    startTime: -42810436.71292881,
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
    endTime: -89615142.0843645,
    purchaseId: 'ae471106-c8b4-42cf-b83a-b061291f2922',
    startDate: '2023-11-01',
    startTime: -53026592.68954444,
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





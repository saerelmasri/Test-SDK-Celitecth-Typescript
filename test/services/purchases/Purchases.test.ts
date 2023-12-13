import nock from 'nock';

import { Celitech } from '../../../src';

import { PurchasesService } from '../../../src/services/purchases/Purchases';

describe('test PurchasesService object', () => {
  it('should be an object', () => {
    expect(typeof PurchasesService).toBe('function');
  });
});

describe('test Purchases', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new Celitech({});

    nock.cleanAll();
  });

  describe('test listPurchases', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get(
          '/purchases?iccid=1287690431&afterDate=quibusdam&beforeDate=rerum&afterCursor=dolore&limit=1&after=1&before=4',
        )
        .reply(200, { data: {} });
      return sdk.purchases
        .listPurchases({
          iccid: '1287690431',
          afterDate: 'quibusdam',
          beforeDate: 'rerum',
          afterCursor: 'dolore',
          limit: 1,
          after: 1,
          before: 4,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test createPurchase', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1').post('/purchases').reply(200, { data: {} });
      return sdk.purchases.createPurchase({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test topUpEsim', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .post('/purchases/topup')
        .reply(200, { data: {} });
      return sdk.purchases.topUpEsim({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test editPurchase', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .post('/purchases/edit')
        .reply(200, { data: {} });
      return sdk.purchases.editPurchase({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test getPurchaseConsumption', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/purchases/quam/consumption')
        .reply(200, { data: {} });
      return sdk.purchases
        .getPurchaseConsumption('quam')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/purchases/non/consumption')
        .reply(200, { data: {} });
      return expect(async () => await sdk.purchases.getPurchaseConsumption()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/purchases/qui/consumption')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.purchases.getPurchaseConsumption('qui'),
      ).rejects.toThrow();
    });
  });
});

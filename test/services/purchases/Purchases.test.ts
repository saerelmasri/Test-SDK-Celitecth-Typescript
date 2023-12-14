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
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get(
          '/purchases?iccid=7032570831&afterDate=placeat&beforeDate=nulla&afterCursor=praesentium&limit=5&after=5&before=6',
        )
        .reply(200, { data: {} });
      return sdk.purchases
        .listPurchases({
          iccid: '7032570831',
          afterDate: 'placeat',
          beforeDate: 'nulla',
          afterCursor: 'praesentium',
          limit: 5,
          after: 5,
          before: 6,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test createPurchase', () => {
    test('test api call', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .post('/purchases')
        .reply(200, { data: {} });
      return sdk.purchases.createPurchase({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test topUpEsim', () => {
    test('test api call', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .post('/purchases/topup')
        .reply(200, { data: {} });
      return sdk.purchases.topUpEsim({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test editPurchase', () => {
    test('test api call', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .post('/purchases/edit')
        .reply(200, { data: {} });
      return sdk.purchases.editPurchase({}).then((r: any) => expect(r.data).toEqual({}));
    });
  });

  describe('test getPurchaseConsumption', () => {
    test('test api call', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/purchases/a/consumption')
        .reply(200, { data: {} });
      return sdk.purchases.getPurchaseConsumption('a').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/purchases/fuga/consumption')
        .reply(200, { data: {} });
      return expect(async () => await sdk.purchases.getPurchaseConsumption()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/purchases/nostrum/consumption')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.purchases.getPurchaseConsumption('nostrum'),
      ).rejects.toThrow();
    });
  });
});

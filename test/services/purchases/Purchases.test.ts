import nock from 'nock';

import { Testcelitechliblab } from '../../../src';

import { PurchasesService } from '../../../src/services/purchases/Purchases';

describe('test PurchasesService object', () => {
  it('should be an object', () => {
    expect(typeof PurchasesService).toBe('function');
  });
});

describe('test Purchases', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new Testcelitechliblab();

    nock.cleanAll();
  });

  describe('test listPurchases', () => {
    test('test api call', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get(
          '/purchases?iccid=6273297066&afterDate=quas&beforeDate=explicabo&afterCursor=veritatis&limit=3&after=4&before=8',
        )
        .reply(200, { data: {} });
      return sdk.purchases
        .listPurchases({
          iccid: '6273297066',
          afterDate: 'quas',
          beforeDate: 'explicabo',
          afterCursor: 'veritatis',
          limit: 3,
          after: 4,
          before: 8,
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
        .get('/purchases/voluptates/consumption')
        .reply(200, { data: {} });
      return sdk.purchases
        .getPurchaseConsumption('voluptates')
        .then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/purchases/modi/consumption')
        .reply(200, { data: {} });
      return expect(async () => await sdk.purchases.getPurchaseConsumption()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/purchases/consequuntur/consumption')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.purchases.getPurchaseConsumption('consequuntur'),
      ).rejects.toThrow();
    });
  });
});

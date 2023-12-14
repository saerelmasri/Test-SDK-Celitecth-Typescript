import nock from 'nock';

import { Celitech } from '../../../src';

import { ESimService } from '../../../src/services/eSim/ESim';

describe('test ESimService object', () => {
  it('should be an object', () => {
    expect(typeof ESimService).toBe('function');
  });
});

describe('test ESim', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new Celitech({});

    nock.cleanAll();
  });

  describe('test getEsim', () => {
    test('test api call', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim?iccid=6746682209')
        .reply(200, { data: {} });
      return sdk.eSim.getEsim('6746682209').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim?iccid=9867036517')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsim()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim?iccid=9880085488')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsim('9880085488')).rejects.toThrow();
    });
  });

  describe('test getEsimDevice', () => {
    test('test api call', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/6238954122/device')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimDevice('6238954122').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/6519261095/device')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimDevice()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/8478311107/device')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimDevice('8478311107')).rejects.toThrow();
    });
  });

  describe('test getEsimHistory', () => {
    test('test api call', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/3851964308/history')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimHistory('3851964308').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/4724042146/history')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimHistory()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/6508462949/history')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimHistory('6508462949')).rejects.toThrow();
    });
  });

  describe('test getEsimMac', () => {
    test('test api call', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/5646344353/mac')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimMac('5646344353').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/9019897304/mac')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimMac()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/8344315825/mac')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimMac('8344315825')).rejects.toThrow();
    });
  });
});

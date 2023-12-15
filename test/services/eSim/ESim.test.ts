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
    sdk = new Celitech();

    nock.cleanAll();
  });

  describe('test getEsim', () => {
    test('test api call', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim?iccid=7795875815')
        .reply(200, { data: {} });
      return sdk.eSim.getEsim('7795875815').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim?iccid=1627353957')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsim()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim?iccid=9388376215')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsim('9388376215')).rejects.toThrow();
    });
  });

  describe('test getEsimDevice', () => {
    test('test api call', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/2862774900/device')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimDevice('2862774900').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/2288507585/device')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimDevice()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/7531108176/device')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimDevice('7531108176')).rejects.toThrow();
    });
  });

  describe('test getEsimHistory', () => {
    test('test api call', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/5563410541/history')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimHistory('5563410541').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/5941773308/history')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimHistory()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/3253011878/history')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimHistory('3253011878')).rejects.toThrow();
    });
  });

  describe('test getEsimMac', () => {
    test('test api call', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/1673146812/mac')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimMac('1673146812').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/3645920277/mac')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimMac()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get('/esim/6741609790/mac')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimMac('6741609790')).rejects.toThrow();
    });
  });
});

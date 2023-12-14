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
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim?iccid=5865180510')
        .reply(200, { data: {} });
      return sdk.eSim.getEsim('5865180510').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim?iccid=3642148578')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsim()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim?iccid=9938767886')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsim('9938767886')).rejects.toThrow();
    });
  });

  describe('test getEsimDevice', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/9392016786/device')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimDevice('9392016786').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/8651262907/device')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimDevice()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/5777113442/device')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimDevice('5777113442')).rejects.toThrow();
    });
  });

  describe('test getEsimHistory', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/4388705586/history')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimHistory('4388705586').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/8841035967/history')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimHistory()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/7427240759/history')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimHistory('7427240759')).rejects.toThrow();
    });
  });

  describe('test getEsimMac', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/2605488821/mac')
        .reply(200, { data: {} });
      return sdk.eSim.getEsimMac('2605488821').then((r: any) => expect(r.data).toEqual({}));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/8834166364/mac')
        .reply(200, { data: {} });
      return expect(async () => await sdk.eSim.getEsimMac()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/esim/6084958166/mac')
        .reply(404, { data: {} });
      return expect(async () => await sdk.eSim.getEsimMac('6084958166')).rejects.toThrow();
    });
  });
});

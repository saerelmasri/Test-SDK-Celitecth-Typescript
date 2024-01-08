import nock from 'nock';

import { Celitech } from '../../../src';

import { PackagesService } from '../../../src/services/packages/Packages';

describe('test PackagesService object', () => {
  it('should be an object', () => {
    expect(typeof PackagesService).toBe('function');
  });
});

describe('test Packages', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new Celitech();

    nock.cleanAll();
  });

  describe('test listPackages', () => {
    test('test api call', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get(
          '/packages?destination=est&startDate=odit&endDate=culpa&afterCursor=quod&limit=3&startTime=4&endTime=9&duration=8',
        )
        .reply(200, { data: {} });
      return sdk.packages
        .listPackages({
          destination: 'est',
          startDate: 'odit',
          endDate: 'culpa',
          afterCursor: 'quod',
          limit: 3,
          startTime: 4,
          endTime: 9,
          duration: 8,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });
});

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
          '/packages?destination=perspiciatis&startDate=sapiente&endDate=velit&afterCursor=aliquam&limit=2&startTime=1&endTime=8&duration=1',
        )
        .reply(200, { data: {} });
      return sdk.packages
        .listPackages({
          destination: 'perspiciatis',
          startDate: 'sapiente',
          endDate: 'velit',
          afterCursor: 'aliquam',
          limit: 2,
          startTime: 1,
          endTime: 8,
          duration: 1,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });
});

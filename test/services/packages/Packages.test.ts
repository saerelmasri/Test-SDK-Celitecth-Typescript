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
    sdk = new Celitech({});

    nock.cleanAll();
  });

  describe('test listPackages', () => {
    test('test api call', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get(
          '/packages?destination=enim&startDate=dignissimos&endDate=rem&afterCursor=porro&limit=2&startTime=7&endTime=9&duration=6',
        )
        .reply(200, { data: {} });
      return sdk.packages
        .listPackages({
          destination: 'enim',
          startDate: 'dignissimos',
          endDate: 'rem',
          afterCursor: 'porro',
          limit: 2,
          startTime: 7,
          endTime: 9,
          duration: 6,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });
});

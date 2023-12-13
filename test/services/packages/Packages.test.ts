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
      const scope = nock('https://api.celitech.net/v1')
        .get(
          '/packages?destination=ab&startDate=voluptatem&endDate=quos&afterCursor=aut&limit=8&startTime=2&endTime=2&duration=4',
        )
        .reply(200, { data: {} });
      return sdk.packages
        .listPackages({
          destination: 'ab',
          startDate: 'voluptatem',
          endDate: 'quos',
          afterCursor: 'aut',
          limit: 8,
          startTime: 2,
          endTime: 2,
          duration: 4,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });
});

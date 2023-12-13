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
          '/packages?destination=quasi&startDate=et&endDate=autem&afterCursor=qui&limit=5&startTime=2&endTime=4&duration=5',
        )
        .reply(200, { data: {} });
      return sdk.packages
        .listPackages({
          destination: 'quasi',
          startDate: 'et',
          endDate: 'autem',
          afterCursor: 'qui',
          limit: 5,
          startTime: 2,
          endTime: 4,
          duration: 5,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });
});

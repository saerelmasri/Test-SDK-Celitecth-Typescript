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
          '/packages?destination=maiores&startDate=omnis&endDate=dignissimos&afterCursor=ad&limit=6&startTime=7&endTime=1&duration=5',
        )
        .reply(200, { data: {} });
      return sdk.packages
        .listPackages({
          destination: 'maiores',
          startDate: 'omnis',
          endDate: 'dignissimos',
          afterCursor: 'ad',
          limit: 6,
          startTime: 7,
          endTime: 1,
          duration: 5,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });
});

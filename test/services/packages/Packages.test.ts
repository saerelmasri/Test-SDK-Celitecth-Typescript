import nock from 'nock';

import { Testcelitechliblab } from '../../../src';

import { PackagesService } from '../../../src/services/packages/Packages';

describe('test PackagesService object', () => {
  it('should be an object', () => {
    expect(typeof PackagesService).toBe('function');
  });
});

describe('test Packages', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new Testcelitechliblab();

    nock.cleanAll();
  });

  describe('test listPackages', () => {
    test('test api call', () => {
      const scope = nock('https://tshnuiufz7.execute-api.us-east-1.amazonaws.com/test')
        .get(
          '/packages?destination=assumenda&startDate=voluptatum&endDate=voluptate&afterCursor=maxime&limit=8&startTime=5&endTime=7&duration=1',
        )
        .reply(200, { data: {} });
      return sdk.packages
        .listPackages({
          destination: 'assumenda',
          startDate: 'voluptatum',
          endDate: 'voluptate',
          afterCursor: 'maxime',
          limit: 8,
          startTime: 5,
          endTime: 7,
          duration: 1,
        })
        .then((r: any) => expect(r.data).toEqual({}));
    });
  });
});

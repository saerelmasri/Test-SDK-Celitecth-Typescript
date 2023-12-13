import nock from 'nock';

import { Celitech } from '../../../src';

import { DestinationsService } from '../../../src/services/destinations/Destinations';

describe('test DestinationsService object', () => {
  it('should be an object', () => {
    expect(typeof DestinationsService).toBe('function');
  });
});

describe('test Destinations', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new Celitech({});

    nock.cleanAll();
  });

  describe('test listDestinations', () => {
    test('test api call', () => {
      const scope = nock('https://api.celitech.net/v1')
        .get('/destinations')
        .reply(200, { data: {} });
      return sdk.destinations.listDestinations().then((r: any) => expect(r.data).toEqual({}));
    });
  });
});

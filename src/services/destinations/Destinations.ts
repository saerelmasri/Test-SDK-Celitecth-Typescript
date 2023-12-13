import BaseService from '../../BaseService';

import { ListDestinationsResponse } from './models/ListDestinationsResponse';

export class DestinationsService extends BaseService {
  /**
   * @summary List Destinations
   * @description Name of the destinations

   * @returns {Promise<ListDestinationsResponse>} - The promise with the result
   */
  async listDestinations(): Promise<ListDestinationsResponse> {
    const urlEndpoint = '/destinations';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(finalUrl, {}, {}, true);
    const responseModel = response.data as ListDestinationsResponse;
    return responseModel;
  }
}

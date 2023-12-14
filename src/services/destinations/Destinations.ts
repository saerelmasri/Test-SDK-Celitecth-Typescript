import BaseService from '../../BaseService';

import CustomHook from '../../hooks/CustomHook';
import { Request } from '../../hooks/Hook';

import { ListDestinationsResponse } from './models/ListDestinationsResponse';

const hook: CustomHook = new CustomHook();

export class DestinationsService extends BaseService {
  /**
   * @summary List Destinations
   * @description Name of the destinations

   * @returns {Promise<ListDestinationsResponse>} - The promise with the result
   */
  async listDestinations(): Promise<ListDestinationsResponse> {
    const headers: { [key: string]: string } = {};
    const urlEndpoint = '/destinations';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const request: Request = { method: 'GET', url: finalUrl, headers };
    await hook.beforeRequest(request);
    const response: any = await this.httpClient.get(
      request.url,
      {},
      {
        ...request.headers,
      },
      true,
    );
    await hook.afterResponse(
      { method: 'GET', url: request.url, headers: request.headers },
      { data: response.data, headers: response.headers, status: response.status },
    );
    const responseModel = response.data as ListDestinationsResponse;
    return responseModel;
  }
}

import BaseService from '../../BaseService';

import CustomHook from '../../hooks/CustomHook';
import { Request } from '../../hooks/Hook';

import { ListPackagesResponse } from './models/ListPackagesResponse';

import { serializeQuery } from '../../http/QuerySerializer';

const hook: CustomHook = new CustomHook();

export class PackagesService extends BaseService {
  /**
   * @summary List Packages
   * @description List of available packages

   * @param optionalParams - Optional parameters
   * @param optionalParams.destination - Needed input variable
   * @param optionalParams.startDate - Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months.
   * @param optionalParams.endDate - End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 60 days after Start date.
   * @param optionalParams.afterCursor - Needed input variable
   * @param optionalParams.limit - Needed input variable
   * @param optionalParams.startTime - Needed input variable
   * @param optionalParams.endTime - Needed input variable
   * @param optionalParams.duration - Needed input variable
   * @returns {Promise<ListPackagesResponse>} - The promise with the result
   */
  async listPackages(
    optionalParams: {
      destination?: string;
      startDate?: string;
      endDate?: string;
      afterCursor?: string;
      limit?: number;
      startTime?: number;
      endTime?: number;
      duration?: number;
    } = {},
  ): Promise<ListPackagesResponse> {
    const { destination, startDate, endDate, afterCursor, limit, startTime, endTime, duration } =
      optionalParams;

    const queryParams: string[] = [];
    const headers: { [key: string]: string } = {};
    if (destination) {
      queryParams.push(serializeQuery('form', true, 'destination', destination));
    }
    if (startDate) {
      queryParams.push(serializeQuery('form', true, 'startDate', startDate));
    }
    if (endDate) {
      queryParams.push(serializeQuery('form', true, 'endDate', endDate));
    }
    if (afterCursor) {
      queryParams.push(serializeQuery('form', true, 'afterCursor', afterCursor));
    }
    if (limit) {
      queryParams.push(serializeQuery('form', true, 'limit', limit));
    }
    if (startTime) {
      queryParams.push(serializeQuery('form', true, 'startTime', startTime));
    }
    if (endTime) {
      queryParams.push(serializeQuery('form', true, 'endTime', endTime));
    }
    if (duration) {
      queryParams.push(serializeQuery('form', true, 'duration', duration));
    }
    const urlEndpoint = '/packages';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
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
    const responseModel = response.data as ListPackagesResponse;
    return responseModel;
  }
}

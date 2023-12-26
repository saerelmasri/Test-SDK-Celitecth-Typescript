import BaseService from '../../BaseService';

import CustomHook from '../../hooks/CustomHook';
import { Request } from '../../hooks/Hook';

import { ListPurchasesResponse } from './models/ListPurchasesResponse';
import { CreatePurchaseResponse } from './models/CreatePurchaseResponse';
import { CreatePurchaseRequest } from './models/CreatePurchaseRequest';
import { TopUpEsimResponse } from './models/TopUpEsimResponse';
import { TopUpEsimRequest } from './models/TopUpEsimRequest';
import { EditPurchaseResponse } from './models/EditPurchaseResponse';
import { EditPurchaseRequest } from './models/EditPurchaseRequest';
import { GetPurchaseConsumptionResponse } from './models/GetPurchaseConsumptionResponse';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

const hook: CustomHook = new CustomHook();

export class PurchasesService extends BaseService {
  /**
   * @summary List Purchases
   * @description This endpoint can be used to list all the successful purchases made between a given interval.

   * @param optionalParams - Optional parameters
   * @param optionalParams.iccid - Needed input variable
   * @param optionalParams.afterDate - Start date of the interval for filtering purchases in the format 'yyyy-MM-dd'
   * @param optionalParams.beforeDate - End date of the interval for filtering purchases in the format 'yyyy-MM-dd'
   * @param optionalParams.afterCursor - Needed input variable
   * @param optionalParams.limit - Needed input variable
   * @param optionalParams.after - Epoch value representing the start of the time interval for filtering purchases
   * @param optionalParams.before - Epoch value representing the end of the time interval for filtering purchases
   * @returns {Promise<ListPurchasesResponse>} - The promise with the result
   */
  async listPurchases(
    optionalParams: {
      iccid?: string;
      afterDate?: string;
      beforeDate?: string;
      afterCursor?: string;
      limit?: number;
      after?: number;
      before?: number;
    } = {},
  ): Promise<ListPurchasesResponse> {
    const { iccid, afterDate, beforeDate, afterCursor, limit, after, before } = optionalParams;

    const queryParams: string[] = [];
    const headers: { [key: string]: string } = {};
    if (iccid) {
      queryParams.push(serializeQuery('form', true, 'iccid', iccid));
    }
    if (afterDate) {
      queryParams.push(serializeQuery('form', true, 'afterDate', afterDate));
    }
    if (beforeDate) {
      queryParams.push(serializeQuery('form', true, 'beforeDate', beforeDate));
    }
    if (afterCursor) {
      queryParams.push(serializeQuery('form', true, 'afterCursor', afterCursor));
    }
    if (limit) {
      queryParams.push(serializeQuery('form', true, 'limit', limit));
    }
    if (after) {
      queryParams.push(serializeQuery('form', true, 'after', after));
    }
    if (before) {
      queryParams.push(serializeQuery('form', true, 'before', before));
    }
    const urlEndpoint = '/purchases';
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
    const responseModel = response.data as ListPurchasesResponse;
    return responseModel;
  }

  /**
   * @summary Create Purchase
   * @description This endpoint is used to purchase a new eSIM by providing the package details.

   * @returns {Promise<CreatePurchaseResponse>} - The promise with the result
   */
  async createPurchase(input: CreatePurchaseRequest): Promise<CreatePurchaseResponse> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/purchases';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const request: Request = { method: 'POST', url: finalUrl, input, headers };
    await hook.beforeRequest(request);
    const response: any = await this.httpClient.post(
      request.url,
      request.input,
      {
        ...request.headers,
      },
      true,
    );
    await hook.afterResponse(
      { method: 'POST', url: request.url, input: request.input, headers: request.headers },
      { data: response.data, headers: response.headers, status: response.status },
    );
    const responseModel = response.data as CreatePurchaseResponse;
    return responseModel;
  }

  /**
   * @summary Top-up eSIM
   * @description This endpoint is used to top-up an eSIM with the previously associated destination by providing an existing ICCID and the package details. The top-up is not feasible for eSIMs in "DELETED" or "ERROR" state.

   * @returns {Promise<TopUpEsimResponse>} - The promise with the result
   */
  async topUpEsim(input: TopUpEsimRequest): Promise<TopUpEsimResponse> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/purchases/topup';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const request: Request = { method: 'POST', url: finalUrl, input, headers };
    await hook.beforeRequest(request);
    const response: any = await this.httpClient.post(
      request.url,
      request.input,
      {
        ...request.headers,
      },
      true,
    );
    await hook.afterResponse(
      { method: 'POST', url: request.url, input: request.input, headers: request.headers },
      { data: response.data, headers: response.headers, status: response.status },
    );
    const responseModel = response.data as TopUpEsimResponse;
    return responseModel;
  }

  /**
   * @summary Edit Purchase
   * @description This endpoint allows you to modify the dates of an existing package with a future activation start time. Editing can only be performed for packages that have not been activated, and it cannot change the package size. The modification must not change the package duration category to ensure pricing consistency.

   * @returns {Promise<EditPurchaseResponse>} - The promise with the result
   */
  async editPurchase(input: EditPurchaseRequest): Promise<EditPurchaseResponse> {
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    const urlEndpoint = '/purchases/edit';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const request: Request = { method: 'POST', url: finalUrl, input, headers };
    await hook.beforeRequest(request);
    const response: any = await this.httpClient.post(
      request.url,
      request.input,
      {
        ...request.headers,
      },
      true,
    );
    await hook.afterResponse(
      { method: 'POST', url: request.url, input: request.input, headers: request.headers },
      { data: response.data, headers: response.headers, status: response.status },
    );
    const responseModel = response.data as EditPurchaseResponse;
    return responseModel;
  }

  /**
   * @summary Get Purchase Consumption
   * @description This endpoint can be called for consumption notifications (e.g. every 1 hour or when the user clicks a button). It returns the data balance (consumption) of purchased packages.

   * @param purchaseId Needed input variable
   * @returns {Promise<GetPurchaseConsumptionResponse>} - The promise with the result
   */
  async getPurchaseConsumption(purchaseId: string): Promise<GetPurchaseConsumptionResponse> {
    if (purchaseId === undefined) {
      throw new Error('The following parameter is required: purchaseId, cannot be empty or blank');
    }
    const headers: { [key: string]: string } = {};
    let urlEndpoint = '/purchases/{purchaseId}/consumption';
    urlEndpoint = urlEndpoint.replace(
      '{purchaseId}',
      serializePath('simple', false, purchaseId, undefined),
    );
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
    const responseModel = response.data as GetPurchaseConsumptionResponse;
    return responseModel;
  }
}

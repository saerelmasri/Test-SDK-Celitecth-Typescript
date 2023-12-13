import BaseService from '../../BaseService';

import { GetEsimResponse } from './models/GetEsimResponse';
import { GetEsimDeviceResponse } from './models/GetEsimDeviceResponse';
import { GetEsimHistoryResponse } from './models/GetEsimHistoryResponse';
import { GetEsimMacResponse } from './models/GetEsimMacResponse';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class ESimService extends BaseService {
  /**
   * @summary Get eSIM Status
   * @description Get status from eSIM

   * @param iccid Needed input variable
   * @returns {Promise<GetEsimResponse>} - The promise with the result
   */
  async getEsim(iccid: string): Promise<GetEsimResponse> {
    if (iccid === undefined) {
      throw new Error('The following parameter is required: iccid, cannot be empty or blank');
    }
    const queryParams: string[] = [];
    if (iccid) {
      queryParams.push(serializeQuery('form', true, 'iccid', iccid));
    }
    const urlEndpoint = '/esim';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}?${queryParams.join('&')}`);
    const response: any = await this.httpClient.get(finalUrl, {}, {}, true);
    const responseModel = response.data as GetEsimResponse;
    return responseModel;
  }

  /**
   * @summary Get eSIM Device
   * @description Get device info from an installed eSIM

   * @param iccid Needed input variable
   * @returns {Promise<GetEsimDeviceResponse>} - The promise with the result
   */
  async getEsimDevice(iccid: string): Promise<GetEsimDeviceResponse> {
    if (iccid === undefined) {
      throw new Error('The following parameter is required: iccid, cannot be empty or blank');
    }
    let urlEndpoint = '/esim/{iccid}/device';
    urlEndpoint = urlEndpoint.replace('{iccid}', serializePath('simple', false, iccid, undefined));
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(finalUrl, {}, {}, true);
    const responseModel = response.data as GetEsimDeviceResponse;
    return responseModel;
  }

  /**
   * @summary Get eSIM History
   * @description Get history from an eSIM

   * @param iccid Needed input variable
   * @returns {Promise<GetEsimHistoryResponse>} - The promise with the result
   */
  async getEsimHistory(iccid: string): Promise<GetEsimHistoryResponse> {
    if (iccid === undefined) {
      throw new Error('The following parameter is required: iccid, cannot be empty or blank');
    }
    let urlEndpoint = '/esim/{iccid}/history';
    urlEndpoint = urlEndpoint.replace('{iccid}', serializePath('simple', false, iccid, undefined));
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(finalUrl, {}, {}, true);
    const responseModel = response.data as GetEsimHistoryResponse;
    return responseModel;
  }

  /**
   * @summary Get eSIM MAC
   * @description Get MAC from eSIM

   * @param iccid Needed input variable
   * @returns {Promise<GetEsimMacResponse>} - The promise with the result
   */
  async getEsimMac(iccid: string): Promise<GetEsimMacResponse> {
    if (iccid === undefined) {
      throw new Error('The following parameter is required: iccid, cannot be empty or blank');
    }
    let urlEndpoint = '/esim/{iccid}/mac';
    urlEndpoint = urlEndpoint.replace('{iccid}', serializePath('simple', false, iccid, undefined));
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(finalUrl, {}, {}, true);
    const responseModel = response.data as GetEsimMacResponse;
    return responseModel;
  }
}

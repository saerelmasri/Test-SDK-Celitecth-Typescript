export interface GetEsimResponse {
  esim?: Esim;
}
interface Esim {
  /**
   * ID of the eSIM
   */
  iccid?: string;
  /**
   * SM-DP+ Address
   */
  smdpAddress?: string;
  /**
   * The manual activation code
   */
  manualActivationCode?: string;
  /**
   * Status of the eSIM, possible values are 'RELEASED', 'DOWNLOADED', 'INSTALLED', 'ENABLED', 'DELETED', or 'ERROR'
   */
  status?: string;
}

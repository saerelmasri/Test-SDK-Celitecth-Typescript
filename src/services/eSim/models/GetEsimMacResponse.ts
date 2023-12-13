export interface GetEsimMacResponse {
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
}

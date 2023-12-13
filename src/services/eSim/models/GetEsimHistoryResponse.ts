export interface GetEsimHistoryResponse {
  esim?: Esim;
}
interface Esim {
  /**
   * ID of the eSIM
   */
  iccid?: string;
  history?: {
    /**
     * The status of the eSIM at a given time, possible values are 'RELEASED', 'DOWNLOADED', 'INSTALLED', 'ENABLED', 'DELETED', or 'ERROR'
     */
    status?: string;
    /**
     * The date when the eSIM status changed in the format 'yyyy-MM-ddThh:mm:ssZZ'
     */
    statusDate?: string;
    /**
     * @deprecated
     * Epoch value representing the date when the eSIM status changed
     */
    date?: number;
  }[];
}

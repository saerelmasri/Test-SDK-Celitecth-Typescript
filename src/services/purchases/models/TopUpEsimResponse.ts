export interface TopUpEsimResponse {
  purchase?: Purchase;
  profile?: Profile;
}
interface Purchase {
  /**
   * ID of the purchase
   */
  id?: string;
  /**
   * ID of the package
   */
  packageId?: string;
  /**
   * Start date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ'
   */
  startDate?: string;
  /**
   * End date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ'
   */
  endDate?: string;
  /**
   * Creation date of the purchase in the format 'yyyy-MM-ddThh:mm:ssZZ'
   */
  createdDate?: string;
  /**
   * @deprecated
   * Epoch value representing the start time of the package's validity
   */
  startTime?: number;
  /**
   * @deprecated
   * Epoch value representing the end time of the package's validity
   */
  endTime?: number;
}
interface Profile {
  /**
   * ID of the eSIM
   */
  iccid?: string;
}

export interface ListPurchasesResponse {
  purchases?: {
    /**
     * ID of the purchase
     */
    id?: string;
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
    /**
     * @deprecated
     * Epoch value representing the date of creation of the purchase
     */
    createdAt?: number;
    esim?: Esim;
    /**
     * The source indicates where the eSIM was purchased, which can be from the API, dashboard, or landing-page. For purchases made before September 8, 2023, the value will be displayed as 'Not available'.
     */
    source?: string;
    package_?: Package_;
  }[];
  afterCursor?: string | null;
}
interface Esim {
  /**
   * ID of the eSIM
   */
  iccid?: string;
}
interface Package_ {
  /**
   * ID of the package
   */
  id?: string;
  /**
   * Size of the package in Bytes
   */
  dataLimitInBytes?: number;
  /**
   * ISO representation of the package's destination
   */
  destination?: string;
  /**
   * Name of the package's destination
   */
  destinationName?: string;
  /**
   * Price of the package in cents
   */
  priceInCents?: number;
}

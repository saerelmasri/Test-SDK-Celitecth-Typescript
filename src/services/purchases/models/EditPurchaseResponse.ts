export interface EditPurchaseResponse {
  /**
   * ID of the purchase
   */
  purchaseId?: string;
  /**
   * Start date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ'
   */
  newStartDate?: string;
  /**
   * End date of the package's validity in the format 'yyyy-MM-ddThh:mm:ssZZ'
   */
  newEndDate?: string;
  /**
   * @deprecated
   * Epoch value representing the new start time of the package's validity
   */
  newStartTime?: number;
  /**
   * @deprecated
   * Epoch value representing the new end time of the package's validity
   */
  newEndTime?: number;
}

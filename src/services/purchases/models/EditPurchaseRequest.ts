export interface EditPurchaseRequest {
  /**
   * ID of the purchase
   */
  purchaseId: string;
  /**
   * Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months.
   */
  startDate: string;
  /**
   * End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 60 days after Start date.
   */
  endDate: string;
  /**
   * @deprecated
   * Epoch value representing the start time of the package's validity. This timestamp can be set to the current time or any time within the next 12 months.
   */
  startTime?: number;
  /**
   * @deprecated
   * Epoch value representing the end time of the package's validity. End time can be maximum 60 days after Start time.
   */
  endTime?: number;
}

export interface CreatePurchaseRequest {
  /**
   * ISO representation of the package's destination
   */
  destination: string;
  /**
   * Size of the package in GB. The available options are 1, 2, 3, 5, 8, 20GB
   */
  dataLimitInGB: number;
  /**
   * Start date of the package's validity in the format 'yyyy-MM-dd'. This date can be set to the current day or any day within the next 12 months.
   */
  startDate: string;
  /**
   * End date of the package's validity in the format 'yyyy-MM-dd'. End date can be maximum 60 days after Start date.
   */
  endDate: string;
  /**
   * Email address where the purchase confirmation email will be sent (including QR Code & activation steps)
   */
  email?: string;
  /**
   * Customize the network brand of the issued eSIM. This parameter is accessible to platforms with Diamond tier and requires an alphanumeric string of up to 15 characters
   */
  networkBrand?: string;
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

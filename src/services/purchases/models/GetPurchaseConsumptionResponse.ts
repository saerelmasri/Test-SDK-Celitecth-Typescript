export interface GetPurchaseConsumptionResponse {
  /**
   * Remaining balance of the package in bytes
   */
  dataUsageRemainingInBytes?: number;
  /**
   * Status of the connectivity, possible values are 'ACTIVE' or 'NOT_ACTIVE'
   */
  status?: string;
}

export interface ListPackagesResponse {
  packages?: {
    /**
     * ID of the package
     */
    id?: string;
    /**
     * ISO representation of the package's destination
     */
    destination?: string;
    /**
     * Size of the package in Bytes
     */
    dataLimitInBytes?: number;
    /**
     * Min number of days for the package
     */
    minDays?: number;
    /**
     * Max number of days for the package
     */
    maxDays?: number;
    /**
     * Price of the package in cents
     */
    priceInCents?: number;
  }[];
  afterCursor?: string | null;
}

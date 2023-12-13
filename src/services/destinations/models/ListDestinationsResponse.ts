export interface ListDestinationsResponse {
  destinations?: {
    /**
     * Name of the destination
     */
    name?: string;
    /**
     * ISO representation of the destination
     */
    destination?: string;
    supportedCountries?: string[];
  }[];
}

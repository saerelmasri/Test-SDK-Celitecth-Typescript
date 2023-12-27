import { DestinationsService } from './services/destinations/Destinations';
import { ESimService } from './services/eSim/ESim';
import { PackagesService } from './services/packages/Packages';
import { PurchasesService } from './services/purchases/Purchases';

export * from './models';

export * as DestinationsModels from './services/destinations';
export * as ESimModels from './services/eSim';
export * as PackagesModels from './services/packages';
export * as PurchasesModels from './services/purchases';

export * from './http/errors';

/**
 * Welcome to the CELITECH API documentation!  Useful links: [Homepage](https://www.celitech.com) | [Support email](mailto:support@celitech.com) | [Blog](https://www.celitech.com/blog/)  # Introduction  This guide is your go-to resource for the CELITECH API, with full documentation and schemas.  Need help? Email us at support@celitech.com.   Partners  refers to online service providers that use our eSIM API. Access levels include Gold, Platinum, and Diamond.  ## API  The CELITECH API is designed for use by partner platforms, including both web and mobile applications. It's assumed all endpoint calls are initiated from the backend of an integrated platform.  API URL: `https://api.celitech.net/v1`  ## Authentication & Authorization CELITECH API uses the OAuth 2.0 protocol for authentication and authorization. The endpoints are protected using client credentials flow which is based on a token exchange. The token has a defined life span (typically 1 hour), after which a new token must be obtained.  To begin, obtain OAuth 2.0 client credentials ( **CLIENT_ID** & **CLIENT_SECRET** ) from the [CELITECH Dashboard](https://www.dashboard.celitech.com/). Then your client application requests an access token from the CELITECH Authorization Server, extracts a token from the response, and sends the token to the CELITECH API that you want to access.  Security Scheme Type: `OAuth2`  Flow type: `clientCredentials`  Token URL: `https://auth.celitech.net/oauth2/token`
 */
export class Testcelitechliblab {
  public destinations: DestinationsService;
  public eSim: ESimService;
  public packages: PackagesService;
  public purchases: PurchasesService;

  constructor() {
    this.destinations = new DestinationsService();
    this.eSim = new ESimService();
    this.packages = new PackagesService();
    this.purchases = new PurchasesService();
  }

  /**
   * Sets the baseUrl that the SDK will use for its requests.
   * @param {string} url
   */
  setBaseUrl(url: string): void {
    this.destinations.setBaseUrl(url);
    this.eSim.setBaseUrl(url);
    this.packages.setBaseUrl(url);
    this.purchases.setBaseUrl(url);
  }
}

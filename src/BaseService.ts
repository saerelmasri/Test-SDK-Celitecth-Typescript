import { Environment } from './http/Environment';
import HTTPLibrary from './http/HTTPLibrary';

export default class BaseService {
  public baseUrl: string = Environment.DEFAULT;

  public httpClient = new HTTPLibrary();

  setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  static patternMatching(value: string, pattern: string, variableName: string): string {
    if (!value) {
      throw new Error(`${variableName} cannot be null or undefined`);
    }
    if (!value.match(new RegExp(pattern))) {
      throw new Error(`Invalid value for ${variableName}: must match ${pattern}`);
    }
    return value;
  }

  static urlEncode = (input: { [key: string]: any }): string =>
    Object.keys(input)
      .map((key) => `${key}=${encodeURIComponent(input[key])}`)
      .join('&');
}

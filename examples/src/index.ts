import { Testcelitechliblab } from 'test-celitech-liblab';

const sdk = new Testcelitechliblab();

(async () => {
  const result = await sdk.destinations.listDestinations();
  console.log(result);
})();

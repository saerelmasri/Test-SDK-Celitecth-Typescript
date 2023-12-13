import { Celitech } from 'celitech';

const sdk = new Celitech();

(async () => {
  const result = await sdk.destinations.listDestinations();
  console.log(result);
})();

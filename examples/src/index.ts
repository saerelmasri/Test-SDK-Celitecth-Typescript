import { Celitech } from 'Test_Celitech_LibLab';

const sdk = new Celitech();

(async () => {
  const result = await sdk.destinations.listDestinations();
  console.log(result);
})();

import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';


fixture("user").page('file:///Users/mudassarsyed/Downloads/BS_testcafe/redirect.html');

test('Check title',async (t) => {
  await t.wait(2000);
  const getPageUrl =ClientFunction(()=>window.location.href);
  await t.expect(getPageUrl()).contains('google.com');
});

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | application', function(hooks) {
  setupTest(hooks);

  test('it exists', async function(assert) {
    let route = this.owner.lookup('route:application');
    assert.ok(route);

    const testModel = await route.model();

    const expectedNodes = [
      {
        "loading": false,
        "name": "Thawing Springs",
        "online": true,
        "url": "https://thawing-springs-53971.herokuapp.com"
      },
      {
        "loading": false,
        "name": "Secret Lowlands",
        "online": true,
        "url": "https://secret-lowlands-62331.herokuapp.com"
      },
      {
        "loading": false,
        "name": "Calm Anchorage",
        "online": true,
        "url": "https://calm-anchorage-82141.herokuapp.com"
      },
      {
        "loading": false,
        "name": "Node 4",
        "online": false,
        "url": "http://localhost:3002"
      }
    ];

    assert.deepEqual(testModel, expectedNodes);
  });
});

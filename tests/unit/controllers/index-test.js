import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | index', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:index');
    
    assert.ok(controller);

    assert.equal(controller.chosen, null);

    const node = {
      url: 'https://thawing-springs-53971.herokuapp.com',
      online: true,
      name: 'Node 1',
      loading: false
    }

    controller.send('setExpanded', node);

    assert.equal(controller.chosen, node);
  });
});

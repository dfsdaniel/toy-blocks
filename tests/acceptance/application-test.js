import { module, test } from 'qunit';
import { visit, currentURL, click, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /application', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/', 'the default application URL is ok');
    assert.equal(findAll('.node-container').length, 4, 'the amout of nodes is correct');

    const initBlocks = findAll('.block-container');
    assert.equal(initBlocks.length, 0, 'the initial state for the blocks is empty');

    await click(findAll('.node-container')[0]);

    const shownBlocks = findAll('.block-container');
    assert.equal(shownBlocks.length, 1, 'the block container is displayed after user clicks');

    const blockElements = findAll('.block-element');
    assert.equal(blockElements.length, 3, 'the blocks amount is correct');
  });
});

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | block-element', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<BlockElement />`);

    assert.equal(this.element.textContent.trim(), '00', 'the empty state is correct');
  });

  test('it renders with valid values', async function(assert) {
    const testBlock = {
      attributes: {
        index: 987,
        data: 'This is a test data information of this block',
      },
    };

    this.set('testBlock', testBlock);

    // Template block usage:
    await render(hbs` <BlockElement @block={{this.testBlock}} />`);

    assert.equal(this.element.querySelector('.index').textContent,
      testBlock.attributes.index, 'the index value is correct');
    assert.equal(this.element.querySelector('.data').textContent,
      testBlock.attributes.data, 'the data value is correct');
  });
});

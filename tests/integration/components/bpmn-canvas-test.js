import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bpmn-canvas', 'Integration | Component | bpmn canvas', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bpmn-canvas}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bpmn-canvas}}
      template block text
    {{/bpmn-canvas}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { moduleForModel, test } from 'ember-qunit';

moduleForModel('imageable', 'Unit | Model | imageable', {
  // Specify the other units that are required for this test.
  needs: ['model:book', 'model:photo']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

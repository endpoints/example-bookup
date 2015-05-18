import { moduleForModel, test } from 'ember-qunit';

moduleForModel('series', 'Unit | Model | series', {
  // Specify the other units that are required for this test.
  needs: ['model:photo', 'model:book']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

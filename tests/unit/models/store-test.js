import Ember from 'ember';
import { moduleForModel, test } from 'ember-qunit';

moduleForModel('store', 'Unit | Model | store', {
  // Specify the other units that are required for this test.
  needs: [
    'model:book',
    'model:chapter',
    'model:series',
    'model:photo',
    'model:author'
  ]
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('books relationship', function(assert) {
  var request = this.store().modelFor('store');

  var relationship = Ember.get(request, 'relationshipsByName').get('books');

  assert.equal(relationship.key, 'books');
  assert.equal(relationship.kind, 'hasMany');
});

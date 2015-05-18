import Ember from 'ember';
import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('book', {
  // Specify the other units that are required for this test.
  needs: ['model:chapter', 'model:photo', 'model:author']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('chapters relationship', function(assert) {
  var request = this.store().modelFor('book');

  var relationship = Ember.get(request, 'relationshipsByName').get('chapters');

  assert.equal(relationship.key, 'chapters');
  assert.equal(relationship.kind, 'hasMany');
});

test('photos relationship', function(assert) {
  var request = this.store().modelFor('book');

  var relationship = Ember.get(request, 'relationshipsByName').get('photos');

  assert.equal(relationship.key, 'photos');
  assert.equal(relationship.kind, 'hasMany');
});

test('author relationship', function(assert) {
  var request = this.store().modelFor('book');

  var relationship = Ember.get(request, 'relationshipsByName').get('author');

  assert.equal(relationship.key, 'author');
  assert.equal(relationship.kind, 'belongsTo');
});

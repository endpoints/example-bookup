import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('book', {
      include: ['chapters', 'photos', 'author'].join(','),
      id: params.id
    }).then(function(data) {
      return data.objectAt(0);
    });
  }
});

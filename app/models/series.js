import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  photos: DS.attr(),
  books: DS.attr(),
});

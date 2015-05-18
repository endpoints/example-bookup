import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  dateOfBirth: DS.attr('date'),
  dateOfDeath: DS.attr('date')
});

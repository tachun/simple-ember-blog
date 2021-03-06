import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  text: DS.attr('string'),
  createdDate: DS.attr('date'),
});

import DS from 'ember-data';

/**
 *  Use ES5 syntax
 */
// export default DS.Model.extend({
//   title: DS.attr('string'),
//   author: DS.attr('string'),
//   createdAt: DS.attr('date'),
//   content: DS.attr('string')
// });


/**
 *  Use ES2015 destructuring assignment
 */
const {
  Model,
  attr
} = DS;

export default Model.extend({
  title: attr('string'),
  author: attr('string'),
  createdDate: attr('date'),
  text: attr('string')
});

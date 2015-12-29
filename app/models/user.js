import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  username: Ember.computed(function() {
    return this.get('id');
  }),
  avatar: Ember.computed(function() {
    //return 'https://www.gravatar.com/avatar/' + md5(this.get('id')) + '.jpg?d=retro&size=80';
  }),
  posts: DS.hasMany('post', { async: true }),
  createdDate: DS.attr('date'),
});

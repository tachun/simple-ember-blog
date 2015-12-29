import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      allPosts: this.store.findAll('post', {orderBy: 'createdDate', limitToLast: 10}),
    };
  }
});

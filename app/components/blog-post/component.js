import Ember from 'ember';

export default Ember.Component.extend({
  postsSortingDesc: ['createdDate:desc'],
  sortedPostsDesc: Ember.computed.sort('post', 'postsSortingDesc'),
  actions: {
    deletePost(post) {
      post.destroyRecord();
    }
  }
});

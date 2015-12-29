import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      post: {}
    };
  },
  actions: {
    createPost(input) {
      const newPost = this.store.createRecord('post', {
        title: input.title,
        text: input.text,
        author: input.author,
        createdDate: new Date(),
      });

      newPost.save();
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service('current-user'),

  actions: {
    changeUserName(newName) {
      this.set('currentUser.user.name', newName);
      this.get('currentUser.user').save();
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),

  actions: {
    submit(){
      let user = this.get('user');
      this.attrs.triggerSave(user);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    login() {
      // reset login error on each attempt
      const { identification, password } = this.getProperties( 'identification', 'password');
      const s = this.get('session');
      s.authenticate('authenticator:jwt', { identification, password })
        .then(() => {
          this.get('flashMessages').success('Logged in!');
        })
        .catch(() => {
          this.get('flashMessages').warning('Invalid username or password');
        });
    },
    signout() {
      this.get('session').invalidate();
    }
  }

});

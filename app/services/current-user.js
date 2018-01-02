import JWT from 'ember-simple-auth-token/authenticators/jwt';
import Ember from 'ember';

const { inject: { service }, isEmpty, RSVP } = Ember;

export default Ember.Service.extend({
  session: service(),
  store: service(),

  load() {
    const token = this.get('session.data.authenticated.token');
    // debugger;
    if (!isEmpty(token)) {
      const userId = this.getUserIdFromToken(token);
      return this.get('store').find('user', userId).then((user) => {
        this.set('user', user);
      });
    } else {
      return RSVP.resolve();
    }
  },

  getUserIdFromToken(token) {
    const jwt = new JWT();
    const tokenData = jwt.getTokenData(token);
    return tokenData['sub'];
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    save(user) {
      let newUser = user;
      newUser.email = user.identification;
      const { identification, password } = newUser.getProperties('identification', 'password');
      newUser.save().catch((error) => {
        console.log(error);
      })
      .then(() => {
        console.log('trying to log in');
        this.get('session')
          .authenticate('authenticator:jwt', { identification, password })
          .catch(() => {
            console.log('unable to log in after registration');
          });
      });
    }
  }
});

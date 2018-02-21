import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  currentUser: Ember.inject.service('current-user'),

  model() {
    return this.store.query('round', {
      filter: { user: this.get('currentUser.user.id')},
      include: 'course,course.holes,scores,scores.hole'
    });
  }
});

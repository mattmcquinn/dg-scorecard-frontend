import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service('current-user'),
  sortProperties: ['number:asc'],
  sortedHoles: Ember.computed.sort('model.holes', 'sortProperties'),
  
  actions: {
    startRound(course) {
      let round = this.get('store').createRecord('round', {
        user: this.get('currentUser.user'),
        course: course,
        weather: ''
      });

      let self = this;
      round.save().then(function(round) {
        self.transitionToRoute('rounds.show', round);
      });

    }
  }
});

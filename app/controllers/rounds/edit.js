import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveRound(round) {
      round.get('scores').forEach(function(score) {
        if(score.get('hasDirtyAttributes'))
        {
          score.save();
        }
     });
    }
  }
});

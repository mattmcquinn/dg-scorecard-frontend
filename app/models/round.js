import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  weather: DS.attr('string'),
  user: DS.belongsTo('user'),
  course: DS.belongsTo('course'),
  scores: DS.hasMany('scores'),
  updatedAt: DS.attr('date'),

  totalStrokes: Ember.computed('scores.@each.strokes', function() {
    return this.get('scores').reduce(function(acc, value) {
      return acc + value.get('strokes');
    }, 0);
  }),

  score: Ember.computed('totalStrokes', 'course.totalPar', function() {
    let diff = this.get('totalStrokes') - this.get('course.totalPar');
    if (diff === 0)
    {
      return "Par";
    }
    else
    {
      return diff;
    }
  }),

  sortProperties: ['hole.number:asc'],
  sortedScores: Ember.computed.sort('scores', 'sortProperties')

});

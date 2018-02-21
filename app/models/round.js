import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  weather: DS.attr('string'),
  user: DS.belongsTo('user'),
  course: DS.belongsTo('course'),
  scores: DS.hasMany('scores'),
  updatedAt: DS.attr('date'),

  totalStrokes: Ember.computed('scores.@each.strokes', function() {
    let sum = 0;
    this.get('scores').forEach(score => {
      let strokes = parseInt(score.get('strokes'));
      if (!isNaN(strokes)) { 
         sum += strokes;
      }
    });
    return sum;
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

import DS from 'ember-data';

export default DS.Model.extend({
  weather: DS.attr('string'),
  score: DS.attr('number'),
  user: DS.belongsTo('user'),
  course: DS.belongsTo('course'),
  scores: DS.hasMany('scores')
});

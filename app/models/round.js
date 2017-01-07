import DS from 'ember-data';

export default DS.Model.extend({
  weather: DS.attr('string'),
  user: DS.belongsTo('user'),
  course: DS.belongsTo('course'),
  scores: DS.hasMany('scores')
});

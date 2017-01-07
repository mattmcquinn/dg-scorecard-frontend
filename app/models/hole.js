import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr('number'),
  par: DS.attr('number'),
  course: DS.belongsTo('course')
});

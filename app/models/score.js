import DS from 'ember-data';

export default DS.Model.extend({
  strokes: DS.attr('number'),
  round: DS.belongsTo('round'),
  hole: DS.belongsTo('hole')
});

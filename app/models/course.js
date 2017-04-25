import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  num_holes: DS.attr('number'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  basket_type: DS.attr('string'),
  tee_type: DS.attr('string'),
  holes: DS.hasMany('hole')
});

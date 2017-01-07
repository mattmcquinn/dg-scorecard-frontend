import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  num_holes: DS.attr('number'),
  holes: DS.hasMany('hole')
});

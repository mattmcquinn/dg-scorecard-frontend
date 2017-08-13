import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['number:asc'],
  sortedHoles: Ember.computed.sort('model.holes', 'sortProperties')
});

import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['updatedAt:desc'],
  sortedModel: Ember.computed.sort('model', 'sortProperties')
});

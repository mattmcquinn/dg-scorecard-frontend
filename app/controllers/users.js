import Ember from 'ember';
import ColumnDefinition from 'ember-bootstrap-table/models/column-definition';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service('current-user'),

  columns: Ember.computed(function() {
    var col1 = ColumnDefinition.create({
      header: 'Name',
      isSortable: true,
      contentPath: 'name',
      isFilterable: true
    });

    var col2 = ColumnDefinition.create({
      header: 'Email',
      isSortable: true,
      contentPath: 'email',
      isFilterable: true
    });
    return [col1, col2];
  })
});

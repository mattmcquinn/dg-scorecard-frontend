import Ember from 'ember';
import ColumnDefinition from 'ember-bootstrap-table/models/column-definition';

export default Ember.Route.extend({
  users: [{firstName: 'James', lastName: 'Carter', age: 30},
    {firstName: 'Steven', lastName: 'Smith', age: 35}],

  model() {
    return this.store.query('course', { 'filter[state]': 'MO' });
  },

  columns: Ember.computed(function() {
    var col1 = ColumnDefinition.create({
      header: 'First Name',
      isSortable: false,
      contentPath: 'firstName',
      isFilterable: true
    });
    var col2 = ColumnDefinition.create({
      header: 'Last Name',
      isSortable: false,
      contentPath: 'lastName',
      isFilterable: true
    });
    var col3 = ColumnDefinition.create({
      header: 'Age',
      isSortable: false,
      contentPath: 'age',
      textAlign: 'center',
      isFilterable: true
    });
    return [col1, col2, col3];
  })

});

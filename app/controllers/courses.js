import Ember from 'ember';
import ColumnDefinition from 'ember-bootstrap-table/models/column-definition';

export default Ember.Controller.extend({

  columns: Ember.computed(function() {
    var col1 = ColumnDefinition.create({
      header: 'Course Name',
      isSortable: true,
      contentPath: 'name',
      isFilterable: true
    });

    var col2 = ColumnDefinition.create({
      header: 'City',
      isSortable: true,
      contentPath: 'city',
      isFilterable: true
    });

    var col3 = ColumnDefinition.create({
      header: 'State',
      isSortable: true,
      contentPath: 'state',
      isFilterable: true
    });

    var col4 = ColumnDefinition.create({
      header: '# Holes',
      isSortable: true,
      contentPath: 'num_holes',
      isFilterable: true
    });

    var col5 = ColumnDefinition.create({
      header: 'Basket Type',
      isSortable: true,
      contentPath: 'basket_type',
      isFilterable: true
    });

    var col6 = ColumnDefinition.create({
      header: 'Tee type',
      isSortable: true,
      contentPath: 'tee_type',
      isFilterable: true
    });
    return [col1, col2, col3, col4, col5, col6];
  })
});

import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Pagination from 'ember-cli-jsonapi-pagination/mixins/routes/jsonapi-pagination';

export default Ember.Route.extend(Pagination, AuthenticatedRouteMixin, {
  geolocation: Ember.inject.service(),

  queryParams: {
    state: { refreshModel: true },
    city: { refreshModel: true },
    name: {refreshModel: true }
  },

  model(params) {
    var that = this;
    return this.get('geolocation').getLocation().then(function(geoObject) {
      let currentLocation = that.get('geolocation').get('currentLocation');
      let latlng = currentLocation[0].toString() + "," + currentLocation[1].toString();
      return that.queryPaginated('course', { filter: { latlng:latlng },
        number:  params.number 
      });
    }, function() {
      return that.queryPaginated('course', params);
    });
  }
});

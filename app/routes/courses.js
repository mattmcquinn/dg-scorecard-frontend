import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import Pagination from 'ember-cli-jsonapi-pagination/mixins/routes/jsonapi-pagination';

export default Ember.Route.extend(Pagination, AuthenticatedRouteMixin, {
  queryParams: {
    state: { refreshModel: true },
    name: {refreshModel: true }
  },

  model(params) {
    if (params.state && params.state !== 'All' && params.name)
    {
      return this.queryPaginated('course', {
        filter: { state: params.state, name: params.name},
        number: params.number
      });
    }
    else if (params.state && params.state !== 'All')
    {
      return this.queryPaginated('course', {
        filter: { state: params.state },
        number: params.number
      });
    }
    else if (params.name)
    {
      return this.queryPaginated('course', {
        filter: { name: params.name },
        number: params.number
      });
    }
    else
    {
      return this.queryPaginated('course', params);
    }
  }
});

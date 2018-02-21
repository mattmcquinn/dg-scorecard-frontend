import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users');
  this.route('courses', function() {
    this.route('view', { path: '/:course_id/view' });
  });
  this.route('signup');
  this.route('login');
  this.route('rounds', function() {
    this.route('show', { path: '/:id/show' });
    this.route('edit', { path: '/:id/edit' });
  });
});

export default Router;

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users');
  this.route('courses', function() {
    this.route('course', { path: ':id' }, function() {
      this.route('holes');
    });
  });
  this.route('signup');
  this.route('login');
  this.route('rounds', function() {
    this.route('show', {
      path: ':id'
    });
  });
});

export default Router;

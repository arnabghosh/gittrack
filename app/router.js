import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function (){
  this.resource('dashboard', { path: '/:user_id'});
  this.resource('landing', { path: '/' });
  this.route('opt-in', {path: '/opt-in/:user_id'});
});

export default Router;


import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import angularComponent from 'angular-component';
import Core from './core/core';
import Components from './components/components';
import AppComponent from './app.component';

import 'normalize.css';
import 'angular-material/angular-material.css';
import 'foundation-sites/dist/foundation.min.css';

console.log('app module')
angular.module('app', [
  uiRouter,
  ngMaterial,
  Core,
  Components
])
.config(($urlRouterProvider, $mdThemingProvider, $mdIconProvider) => {
  $urlRouterProvider.otherwise('/');
  
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('pink');
})
.component('app', AppComponent);

angular.element(document).ready(() => {
  angular.bootstrap(document.getElementsByTagName('body')[0], ['app']);
});

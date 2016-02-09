
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularComponent from 'angular-component';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import 'foundation-sites/dist/foundation.min.css';

console.log('app module')
angular.module('app', [
  uiRouter,
  Common.name,
  Components.name
])
.config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
  })
.component('app', AppComponent);

angular.element(document).ready(() => {
  angular.bootstrap(document.getElementsByTagName('body')[0], ['app']);
});

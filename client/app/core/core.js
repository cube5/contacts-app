import Services from './services/services';
import Maps from './maps/maps';
import 'angular-simple-logger';
import 'lodash';

console.log('core module');
let coreModule = angular.module('app.core', [
  Services,
  Maps
]);

export default coreModule.name;

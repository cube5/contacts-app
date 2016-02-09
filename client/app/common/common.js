import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Services from './services/services';
import Maps from './maps/maps';
import 'angular-simple-logger';
import 'lodash';

console.log('common module');
let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  Services,
  Maps
]);

export default commonModule;

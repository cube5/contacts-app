import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Contacts from './contacts/contacts';

console.log('components module');
let componentModule = angular.module('app.components', [
  Home,
  About.name,
  Contacts
]);

export default componentModule;
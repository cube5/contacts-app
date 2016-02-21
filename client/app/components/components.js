import Contacts from './contacts/contacts';

console.log('components module');
let componentModule = angular.module('app.components', [
  Contacts
]);

export default componentModule.name;
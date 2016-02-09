import Contacts from './contacts.component';
import ContactsController from './contacts.controller';

console.log('contacts module')
export default angular.module('contacts', [])
  .config(($stateProvider) => {
    $stateProvider
      .state('contacts', {
        url: '/contacts',
        template: '<contacts></contacts>'
      })
  })
  .component('contacts', Contacts)
  .controller('ContactsController', ContactsController)
  .name;
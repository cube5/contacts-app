import ContactForm from './form/contact-form.js';
import ContactList from './list/contact-list';
import ContactShow from './show/contact-show';

import contactsComponent from './contacts.component';
import ContactsController from './contacts.controller';
import ContactsFactory from '../../core/services/contacts.service';

console.log('contacts module')
export default angular.module('contacts', [ ContactForm, ContactList, ContactShow ])
  .config(($stateProvider) => {
    $stateProvider
      .state('contacts', {
        url: '/',
        template: '<contacts></contacts>'
      })
  })
  .factory('ContactsFactory', ContactsFactory)
  .component('contacts', contactsComponent)
  .controller('ContactsController', ContactsController)
  .name;
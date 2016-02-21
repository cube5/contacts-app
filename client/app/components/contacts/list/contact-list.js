import ContactListController from './contact-list.controller';
import contactListComponent from './contact-list.component';

export default angular.module('contact-list', [])
    .component('contactList', contactListComponent)
    .controller('ContactListController', ContactListController)
    .name
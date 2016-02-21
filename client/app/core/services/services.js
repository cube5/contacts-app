import 'firebase';
import angularFire from 'angularfire';
import ContactsFactory from './contacts.service.js'

export default angular.module('app.services', ['firebase'])
    .factory('ContactsFactory', ContactsFactory)
    .name
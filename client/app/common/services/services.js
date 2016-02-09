import 'firebase';
import angularFire from 'angularfire';
import dataService from './data.service.js'

export default angular.module('app.services', ['firebase'])
    .factory('dataService', dataService)
    .name
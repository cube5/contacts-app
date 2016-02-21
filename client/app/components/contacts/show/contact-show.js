import ContactShowController from './contact-show.controller';
import show from './contact-show.html';

export default angular.module('contact.show', [])
  .config(($stateProvider) => {
    $stateProvider.state('show', {
      url: '/show/:id',
      template: show,
      controller: 'ContactShowController',
      controllerAs: 'vm'
    })
  })
  .controller('ContactShowController', ContactShowController)
  .name;
import ContactFormController from './contact-form.controller';
import form from './contact-form.html';

export default angular.module('contact.create', [])
  .config(($stateProvider) => {
    $stateProvider.state('new', {
      url: '/new',
      template: form,
      controller: 'ContactFormController',
      controllerAs: 'vm'
    })
  })
  .controller('ContactFormController', ContactFormController)
  .name;
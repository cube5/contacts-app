import homeComponent from './home.component';

console.log('home module')
let homeModule = angular.module('home', [])
  .config(($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '/home',
        template: '<home></home>'
      });
  })
  .component('home', homeComponent);

export default homeModule.name;

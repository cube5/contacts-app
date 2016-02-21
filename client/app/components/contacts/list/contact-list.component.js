import template from './contact-list.html';
export default {
  bindings: {
      contacts: '='
  },
  controller: 'ContactListController as vm',
  restrict: 'E',
  template: template
};
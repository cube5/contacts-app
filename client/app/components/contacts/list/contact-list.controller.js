export default class ContactListController {
  constructor(ContactsFactory, $location, $state) {
    console.log('contact-list controller');
    let vm = this;
    vm.contacts = ContactsFactory.getContacts();
    vm.selected = {};
    vm.showContact = showContact;
    
    function showContact(selected) {
      console.log('selected: ', selected);
      $state.go('show', { id: selected.$id });
    }
    
  }
}
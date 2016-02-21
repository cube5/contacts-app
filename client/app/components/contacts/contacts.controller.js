export default class ContactsController {
  constructor(ContactsFactory, $state, $mdToast) { // if maps enabled add: uiGmapGoogleMapApi
    console.log('ContactsController');
    var vm = this;
    vm.contacts = ContactsFactory.getContacts();
    vm.remove = removeContact;
    vm.showContact = showContact;
    
    function removeContact(contact) {
      ContactsFactory.remove(contact);
    }
    
    function showContact(contact) {
      $state.go('show', { id: contact.$id });
    }
    
    // uiGmapGoogleMapApi.then(function(maps) {
    //   console.log('map ready');
    // });
    
    
  }
}
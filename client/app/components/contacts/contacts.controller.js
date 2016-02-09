export default class ContactsController {
  constructor(dataService, uiGmapGoogleMapApi) {
    console.log('ContactsController');
    var vm = this;
    vm.contacts = dataService.getContacts();
    vm.addFormSubmit = addFormSubmit;
    vm.editFormSubmit = editFormSubmit;
    vm.showAddForm = showAddForm;
    vm.showEditForm = showEditForm;
    vm.hide = hideForms;
    vm.showContact = showContact;
    vm.removeContact = removeContact;
    
    vm.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    
    uiGmapGoogleMapApi.then(function(maps) {
      console.log('map ready');
    });
    
    function showAddForm() {
      hideForms();
      vm.isAddFormShown = true;
      vm.contact = null;
      clearFields();
    }
    
    function showEditForm(contact) {
      hideForms();
      vm.editFormShow = true;
      vm.contact = contact;
      vm.homePhone = contact.phones[0].home;
      vm.workPhone = contact.phones[0].work;
      vm.mobilePhone = contact.phones[0].mobile;
    }
    
    function hideForms() {
      vm.isAddFormShown = false;
      vm.contactShow = false;
    }
    
    function showContact(contact) {
      vm.contact = contact;
      vm.homePhone = contact.phones[0].home;
      vm.workPhone = contact.phones[0].work;
      vm.mobilePhone = contact.phones[0].mobile;
      
      vm.contactShow = true;
    }
    
    function addFormSubmit() {
      setPhones(vm.contact);
      setAddress(vm.contact);
      dataService.add(vm.contact).then(() => {
        clearFields();
        
        // hide form
        vm.isAddFormShown = false;
        
        // send message to user
        vm.msg = 'Contact Added Successfully';
      });
    }
    
    function editFormSubmit() {
      //get contact ID
      let id = vm.contact.$id;
      
      // get record based on id
      let record = vm.contacts.$getRecord(id);
      
      record = vm.contact;
      setPhones(record);
      
      dataService.update(record).then(() => {
        clearFields();
        vm.editFormShow = false;
        vm.msg = "Contact updated successfully";
      });
    }
    
    function removeContact(contact) {
      dataService.remove(contact).then(() => {
        vm.msg = 'Contact removed successfully';
      });
    }
    
    function setPhones(contact) {
      contact.phones = [{
        home: vm.homePhone,
        work: vm.workPhone,
        mobile: vm.mobilePhone
      }];
    }
    
    function clearFields() {
      vm.contact = null;
      vm.homePhone = null;
      vm.workPhone = null;
      vm.mobilePhone = null;
    }
  }
}
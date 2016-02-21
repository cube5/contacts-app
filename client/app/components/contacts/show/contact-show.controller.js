export default class ContactFormController {
  constructor($firebaseArray, ContactsFactory, $stateParams, $mdToast) {
    console.log('ContactShowController');
    var date = new Date();
    var vm = this;
    ContactsFactory.getContacts().$loaded((contacts) => {
      vm.contact = contacts.$getRecord($stateParams.id)
      vm.contact.birthday = new Date(vm.contact.birthday);
    });
    vm.update = update;
    
    vm.minDate = new Date(
      date.getFullYear() - 100,
      date.getMonth(),
      date.getDate()
    );
    vm.maxDate = new Date(
      date.getFullYear() - 10,
      date.getMonth(),
      date.getDate()
    );
    
    function update() {
      vm.contact.birthday = vm.contact.birthday.toJSON();
      ContactsFactory.update(vm.contact).then(() => {
        vm.isEditing = false;
        showToast();
      });
    }
    
    function showToast() {
      $mdToast.show(
        $mdToast.simple()
          .textContent('Contact updated succesfully...')
          .position({
            bottom: false,
            top: true,
            left: false,
            right: true
          })
          .hideDelay(3000)
      );
    }
    
  }
}
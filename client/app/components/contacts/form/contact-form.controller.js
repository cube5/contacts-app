export default class ContactFormController {
  constructor(ContactsFactory, $mdToast) {
    console.log('ContactFormController');
    var date = new Date();
    var vm = this;
    vm.save = save;
    vm.isEditing = false;
    
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
    
    function save() {
      vm.contact.birthday = vm.birthday.toJSON();
      ContactsFactory.save(vm.contact).then(() => {
        vm.contact = {};
        showToast();
      });
    }
    
    function showToast() {
      $mdToast.show(
        $mdToast.simple()
          .textContent('Contact saved succesfully...')
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
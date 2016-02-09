export default function($firebaseArray) {
  var ref = new Firebase('https://cube5-contacts-app.firebaseio.com/contacts');
  var contacts = $firebaseArray(ref);
  return {
    add: add,
    update: update,
    remove: remove,
    getContacts: getContacts
  }
  
  function add(contact) {
    return contacts.$add(contact).then((ref) => {
      var id = ref.key();
      console.log(`Added contact with ID: ${id}`);
    });
  }
  
  function update(contact) {
    return contacts.$save(contact).then((ref) => {
      var id = ref.key();
      console.log(`Updated contact with ID: ${id}`);
    });
  }
  
  function remove(contact) {
    let id = contact.$id;
    return contacts.$remove(contact).then((ref) => {
      console.log(`Updated contact with ID: ${id}`);
    });
  }
  
  function getContacts() {
    return contacts;
  }
}
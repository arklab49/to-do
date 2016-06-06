/*global Firebase */
export default class LoginController {
  constructor($firebaseArray) {
    
    // let ref = new Firebase("https://geoinf-todo.firebaseio.com");
    let ref = new Firebase("https://geoinformatyka.firebaseio.com/items");
    this.items = $firebaseArray(ref);
  }
  
  addNote() {
    this.items.$add({text: 'NOWY!'});
  }
  
  removeNote() {
      this.items.$remove({text: 'NOWY!'});
  }
  
  getItems() {
      console.log(this.items.text);
      return this.items;
      
  }
}
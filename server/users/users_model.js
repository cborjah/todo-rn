const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  lists: { type: Array },
});

/*
Do not declare methods using ES6 arrow functions (=>).
Arrow functions explicitly prevent binding this, so the method will not
have access to the document.
*/
UserSchema.methods.addTodo = function addTodo(listName, todo) {
  for (let item of this.lists) {
    if (item.name === listName) {
      item.todos.push({ todo, status: 'OPEN' });

      /*
      Required when modifying nested arrays/objects, lets db know what
      has changed and to save it.
       */
      this.markModified('lists');

      this.save((err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  }
};

module.exports = mongoose.model('User', UserSchema);

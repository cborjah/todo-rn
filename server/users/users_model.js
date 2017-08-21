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

      return this.save((err) => {
        if (err) {
          console.log(err);
        }
        return this;
      });
    }
  }
};

UserSchema.methods.changeTodo = function changeTodo(listIndex, todoIndex, newTodo) {
  // console.log(`in change todo model method: ${listIndex}, ${todoIndex}`);

  this.lists[listIndex].todos[todoIndex].todo = newTodo;
  this.markModified('lists');

  return this.save((err) => {
    if (err) {
      console.log(err);
    }
    return this;
  });
};

UserSchema.methods.changeTodoStatus = function changeTodoStatus(listIndex, todoIndex, newStatus) {
  // console.log(`in change todo model method: ${listIndex}, ${todoIndex}, ${newStatus}`);

  this.lists[listIndex].todos[todoIndex].status = newStatus;
  this.markModified('lists');

  return this.save((err) => {
    if (err) {
      console.log(err);
    }
    return this;
  });
};

UserSchema.methods.deleteTodo = function deleteTodo(listIndex, todoIndex) {
  console.log(`in change todo model method: ${listIndex}, ${todoIndex}`);
  this.lists[listIndex].todos.splice(todoIndex, 1);
  this.markModified('lists');

  return this.save((err) => {
    if (err) {
      console.log(err);
    }
    return this;
  });
};

UserSchema.methods.changeListName = function changeListName(listIndex, newListName) {
  // console.log(`in change changeListName model method: ${listIndex}, ${newListName}`);
  // console.log(this.lists[listIndex]);
  this.lists[listIndex].name = newListName;
  // console.log(this.lists[listIndex]);
  this.markModified('lists');

  return this.save((err) => {
    if (err) {
      console.log(err);
    }
    return this;
  });
};

UserSchema.methods.deleteList = function deleteList(listIndex) {
  console.log(`in deleteList model method: ${listIndex}`);
  console.log(this.lists);
  this.lists.splice(listIndex, 1);
  console.log(this.lists);
  this.markModified('lists');

  return this.save((err) => {
    if (err) {
      console.log(err);
    }
    return this;
  });
};

module.exports = mongoose.model('User', UserSchema);

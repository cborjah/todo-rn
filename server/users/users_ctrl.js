const User = require('./users_model');

const users = {
  '/login': {
    post: (req, res) => {
      User.findOne({ username: req.body.username })
        .then((user) => {
          if (!user) {
            const newUser = new User({
              username: req.body.username,
              password: req.body.password,
            });

            newUser.save((err, data) => {
              if (err) {
                console.log(`Error saving new user: ${err}`);
                res.status(400).send(err);
              } else {
                res.status(201).send(`Saved: ${data}`);
              }
            });
          } else {
            User.findOne({ username: req.body.username })
              .then((data) => {
                if (req.body.password === data.password) {
                  res.status(200).json(data);
                } else {
                  res.status(200).send({
                    msg: 'Incorrect Password.',
                  });
                }
              });
          }
        })
        .catch((err) => {
          res.status(400).send('Error creating user: ', err.message);
        });
    },
  },
  '/createList': {
    post: (req, res) => {
      User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { lists: { name: req.body.listName, todos: [] } } },
        (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.status(200).json(data);
          }
        }
      );
    },
  },
  // For debugging purposes
  '/clearLists': {
    post: (req, res) => {
      User.findOneAndUpdate(
        { _id: '59978a3a84e3bc70c5116641' },
        { $set: { lists: [] } },
        (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.status(200).json(data);
          }
        }
      );
    },
  },
  '/createTodo': {
    post: (req, res) => {
      console.log('in createtodo route');
      console.log(req.body);
      // Finds user's document
      User.findOne({ _id: req.body.userId }, (err, user) => {
        user.addTodo(req.body.listName, req.body.todo)
          .then(updatedDoc => res.status(200).send(updatedDoc));
      });
    },
  },
  '/changeTodo': {
    post: (req, res) => {
      User.findOne({ _id: req.body.userId }, (err, user) => {
        user.changeTodo(req.body.listIndex, req.body.todoIndex, req.body.newTodo)
          .then((updatedDoc) => {
            console.log(updatedDoc);
            res.status(200).send(updatedDoc);
          });
      });
    },
  },
};

module.exports = users;

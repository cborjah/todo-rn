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
              .then(data => res.status(200).json(data));
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
        { _id: '59951db7be83df485db8578e' },
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
      User.findOneAndUpdate(
        { '_id': req.body.userId, 'lists.name': req.body.listName },
        { '$push': { 'lists.0.todos': { 'todo': req.body.todo, 'status': 'open' } } },
        (err, data) => {
          // console.log(data);
          res.json(data);
        }
      );

      // User.find(
      //   { _id: req.body.userId },
      //   { lists: { $elemMatch: { name: req.body.listName } } },
      //   (err, data) => {
      //     // console.log(data);
      //     data[0].lists[0].todos.push({ todo: req.body.todo, status: 'open' });
      //     res.json(data);
      //   }
      // );
    }
  }
};

module.exports = users;

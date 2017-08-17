const User = require('./users_model');

const users = {
  '/login': {
    'post': (req, res) => {
      User.findOne({ 'username': req.body.username })
        .then((user) => {
          if(!user) {
            const newUser = new User({
              username: req.body.username,
              password: req.body.password
            });

            newUser.save((err, data) => {
              if(err) {
                console.log(`Error saving new user: ${err}`);
                res.status(400).send(err);
              } else {
                res.status(201).send(`Saved: ${data}`);
              }
            });
          } else {
            User.findOne({ 'username': req.body.username })
              .then((data) => res.status(200).json(data));
              // .then((data) => console.log(data));
          }
        })
        .catch((err) => {
          res.status(400).send('Error creating user: ', err.message);
        });
    }
  },
  '/getData': {
    'get': (req, res) => {

    }
  }
}

module.exports = users;

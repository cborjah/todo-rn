const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');

const app = express();
const router = require('./config/router');

app.set('port', process.env.PORT || 7700);

app.get('/', (req, res) => res.send('Hello World!'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/', router);

app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}...`));

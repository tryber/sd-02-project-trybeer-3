const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv');

dotenv.config();

const { errorController } = require('./controllers/errorController');
const usersRoute = require('./routes/usersRoute');
const productsRoute = require('./routes/productsRoute');

const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', usersRoute);
app.use('/', productsRoute);

app.use(errorController);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Port: ${port}, Prod`);
});

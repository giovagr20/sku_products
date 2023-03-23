const express = require('express');
const cors = require('cors');
const app = express();
const parser = require('body-parser')
const connection = require('./infrastructure/database/db.connection');
const morgan = require('morgan');
const productController = require('./application/adapters/controllers/products.controller');
const bodyParser = require('body-parser');


connection.connect()
.then(res => console.log(`Database connection successful`))
.catch(err => console.log(`Error connection to database ${err}`));


//Middleware
app.set('port', 3000);
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', productController);


app.listen(app.get('port'), () => {
  console.log('Server is listening on port 3000');
});
const express = require('express');
const morgan = require('morgan');

const methodOverride = require('method-override')

const path = require('path');
const { engine } = require('express-handlebars');

const route = require('./routes')

const db = require('./config/db');
const { header } = require('express/lib/request');

const cors= require('cors')
//const dotenv = require('dotenv')
const cookieParser= require('cookie-parser')

const app = express();
const port = 3000;

//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Static file
app.use(express.static( path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

// Template Engine
app.engine('hbs', engine({
    extname:'.hbs',
    helpers: {
      sum: (a,b) => a+b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Method override
app.use(methodOverride('_method'))

// Routes init
route(app);

// DB
db.connect();

//Login
app.use(cors)
app.use(cookieParser)


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})




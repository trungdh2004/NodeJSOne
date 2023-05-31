const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
var path = require('path');
// require module file render

const route = require('./routes');
const db = require('./config/db')


// mongoose db
db.connect()

// template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// morgan
app.use(morgan('combined'));

// static img
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);
//

route(app);

app.listen(port, () => console.log(`http://localhost:${port}`));

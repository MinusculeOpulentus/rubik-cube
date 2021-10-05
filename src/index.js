const express = require('express');
const initHandlebars = require('./config/handlebars');
const path = require('path');
const routes = require('./routes');


const app = express();

app.use(express.urlencoded({extended:　true}))

initHandlebars(app);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);

app.listen(5000, console.log.bind(console, 'App is running on http://localhost:5000'));


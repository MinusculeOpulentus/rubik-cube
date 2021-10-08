const express = require('express');
const initHandlebars = require('./config/handlebars');
const path = require('path');
const routes = require('./routes');
const config = require('./config/config.json')[process.env.NODE_ENV]
const initDatabase = require('./config/database');

const app = express();

app.use(express.urlencoded({extended:　true}))

initHandlebars(app);

app.use(express.static(path.resolve(__dirname, './public')));
app.use(routes);

initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, console.log.bind(console, `App is running on http://localhost:${config.PORT}`));
    })
    .catch(err => {
        console.log('App initializaton failed: ', err);
    });

//app.listen(config.PORT, console.log.bind(console, `Application is running on http://localhost:${config.PORT}`));


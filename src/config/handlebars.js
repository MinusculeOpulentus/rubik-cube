const handlebars = require('express-handlebars');
const path = require('path')
const initHandlebars = (app) => {  // to set up handlebars
    app.set('views', path.resolve('./src/views'))
    //console.log(path.resolve('./src/views'))

    app.engine('hbs', handlebars({
        extname: 'hbs'
    }));

    app.set('view engine', 'hbs');
};

module.exports = initHandlebars;


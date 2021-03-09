const path = require('path'); //modulo path me permite unir directorios 
const route = require('../routes/index');


module.exports = app => {

    //configuracion
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(__dirname,  'views'));


    


    //routes

    route(app);

    return app;


}
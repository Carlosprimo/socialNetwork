const path = require('path'); //modulo path me permite unir directorios 
const express = require('express');
const route = require('../routes/index');


module.exports = app => {

    //configuracion
    app.set('port', process.env.PORT || 3000);
    
        // Motor de plantilla
    app.set("view engine", "ejs");
    app.set("views", path.join( __dirname , '../views'));


    


    //routes

    route(app);


    //static files
    app.use('/public' , express.static(path.join(__dirname , '../public')) );

    return app;
    


}
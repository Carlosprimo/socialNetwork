const path = require('path'); //modulo path me permite unir directorios 
const express = require('express');
const route = require('../routes/index');
const ejs = require('ejs');
const morgan = require('morgan');
const multer = require('multer');

module.exports = app => {

    //configuracion
    app.set('port', process.env.PORT || 3000);
    
        // Motor de plantilla
    app.set("view engine", "ejs");
    app.set("views", path.join( __dirname , '../views'));
    
    ejs.views = ['partials','layouts']; 
    app.set('view engine', 'ejs');
    
    // middlewares
    app.use(morgan('dev'));
    app.use(multer({
        dest: path.join(__dirname, '../public/upload/temp')
    }).single('files'));
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());


    //routes
    route(app);


    //static files
    app.use('/public' , express.static(path.join(__dirname , '../public')) );

    return app;
}
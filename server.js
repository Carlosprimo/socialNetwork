const express = require('express');

const config = require('./src/server/config');

const app = config(express());
//database
require('./database');

//iniciar el server
app.listen(app.get('port'), () => {
    console.log('server en el puerto', app.get('port'));

});
/* const express = require('express');
app = express(),
    mongoose = require('mongoose');

const router = express.Router();
app.use(router);
router.get('/', function(req, res) {
    res.send("Hello World!");
});

app.listen(3000, function() {
    console.log('listen on http://localhost:3000');
}); */
var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();

//Set up view engine
app.set('view engine', 'ejs');


//static file serving
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(3000);
console.log('Server listening on port 3000.');
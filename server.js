var express = require('express');  // takes string name of module as argument

// create our app
var app = express();

// tell it what folder to serve. app.use add functionality
// express.static(folder) is the folder we are exposing
app.use(express.static('public'));

// start the server. takes 2 arguments, port and a function called on start
app.listen(3000, function(){
  console.log('Express server is up on port 3000');
});

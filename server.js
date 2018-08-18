// grab our dependencies
const express    = require('express'),
  app            = express(),
  bodyParser     = require('body-parser'),
  argv           = require('minimist')(process.argv.slice(2));


// use body parser to grab info from a form
app.use(bodyParser.urlencoded({ extended: true })); //true changed to false for validation test
app.use(bodyParser.json());


// set the routes =============================
app.use(require('./app/routes'));

// start our engines ===========================
app.listen(8080, function() {
  console.log(`App listening on 8080`);
});

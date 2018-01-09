var express = require("express");
var http = require("http");
var path = require("path");
var mongoose = require('mongoose');
var router = require("./routes/routes");
var logger = require("morgan");
var bodyParser = require('body-parser');
var app = express();
var clientPath = path.resolve(__dirname, "client");
var config = require('./config/config')
var auth = require('./auth/auth.js')();
var jwt = require('jwt-simple');
var confJWT = require('./config/config.json').jwt;
var Users = require('./models/Users')
var login = require('./routes/login')




app.use(bodyParser.json({limit: '50mb'}))
app.use(logger("dev"));
app.use(function(req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, Content-Length, Authorization, X-Requested-With, X-XSRF-TOKEN");
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  if ( req.method === 'OPTIONS' ) {
    console.log('OPTIONS SUCCESS');
    res.end();
  }
  next();
});
var mongodb = config.database.dialect+'://'+config.database.host+'/'+config.database.name
var promise = mongoose.connect(mongodb, {
  useMongoClient: true,
});
app.use(auth.initialize());
app.use('/auth',login);


app.use("/",express.static(clientPath));
app.use("/api", router);
app.all('*', function (req, res) {
  res.status(200).sendFile(path.join(__dirname, '/client/index.html'));
});

var port = process.env.PORT || 8080;
app.listen(port);
console.log('Express server listening on port ' + port);
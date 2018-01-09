var service = require("../services/UserService")
var jwt = require('jwt-simple');
var confJWT = require('../config/config.json').jwt;

module.exports.get_user = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    console.log("the request data --->",req.body)
  service.get_user(username,password,function (user){
      if(user){
            var payload = {
                id: user._id
            };
            var token = jwt.encode(payload, confJWT.jwtSecret);
            res.json({
                token: token,
                user: user
            });
      }else{
          res.status(401)
      }
      
  });
}
module.exports.update_user = function(req ,res){
    var userdetails = req.body;
    service.update_user(userdetails , function(userdata){
        if(userdata){
        res.status(201)
        res.json(userdata)
        }
        else{
            res.status(400)
            
        }
    })
}
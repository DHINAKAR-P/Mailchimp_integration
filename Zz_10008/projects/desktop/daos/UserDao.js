var Users = require('../models/Users')

module.exports.get_user = function(username,password, callback) {
    Users.find({username:username, password:password},function(user,error){
        if (error) {
            callback(error);
          } else {
            callback(user);
          }
  });
}

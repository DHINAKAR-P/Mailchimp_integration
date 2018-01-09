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

module.exports.update_user = function(userdetails , callback){
  Users.findByIdAndUpdate({_id:userdetails._id},{
    $set:userdetails
  },{upsert:true, new : true},function(err,userdata){
    if(err){
      callback(err)
    }
    else{
    callback(userdata)
  }
  })
}
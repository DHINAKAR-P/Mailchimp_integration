var variate_settings_model = require("../models/variate_settings");

module.exports.create_variate_settings = function(variate_settings ,callback){
    console.log("create variate_settings in dao------------",variate_settings);
    var variate_settings_value = new variate_settings_model(variate_settings);
    variate_settings_value.save(function(err,variate_settings){
        if(err){
            console.log("create variate_settings value err---",err)
            callback(err);
        }
        else{
            console.log("create variate_settings value success")
        callback(variate_settings);
    }
    })
}

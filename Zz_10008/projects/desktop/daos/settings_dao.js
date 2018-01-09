var settings_model = require("../models/settings");

module.exports.create_settings = function(settings ,callback){
    console.log("create settings in dao------------",settings);
    var settings_value = new settings_model(settings);
    settings_value.save(function(err,settings){
        if(err){
            console.log("create settings value err---",err)
            callback(err);
        }
        else{
            console.log("create settings value success")
        callback(settings);
    }
    })
}

module.exports.update_settings = function(settings , callback){
    settings_model.findOneAndUpdate({_id : settings.id},
    { $set:settings},
{ upsert:true , new : true},function(settings,err){
    if(err){
    callback(err)
}
else{
    callback(settings)
}
})
}
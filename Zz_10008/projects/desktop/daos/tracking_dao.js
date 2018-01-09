var tracking_model = require("../models/tracking");

module.exports.create_tracking = function(tracking ,callback){
    console.log("create tracking in dao------------",tracking);
    var tracking_value = new tracking_model(tracking);
    tracking_value.save(function(err,tracking){
        if(err){
            console.log("create tracking value err---",err)
            callback(err);
        }
        else{
            console.log("create tracking value success")
        callback(tracking);
    }
    })
}

var recipients_model = require("../models/recipients");

module.exports.create_recipients = function(recipients ,callback){
    console.log("create recipients in dao------------",recipients);
    var recipients_value = new recipients_model(recipients);
    recipients_value.save(function(err,recipients){
        if(err){
            console.log("create recipients value err---",err)
            callback(err);
        }
        else{
            console.log("create recipients value success")
        callback(recipients);
    }
    })
}

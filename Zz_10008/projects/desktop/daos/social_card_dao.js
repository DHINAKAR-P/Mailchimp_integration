var social_card_model = require("../models/social_card");

module.exports.create_social_card = function(social_card ,callback){
    console.log("create social_card in dao------------",social_card);
    var social_card_value = new social_card_model(social_card);
    social_card_value.save(function(err,social_card){
        if(err){
            console.log("create social_card value err---",err)
            callback(err);
        }
        else{
            console.log("create social_card value success")
        callback(social_card);
    }
    })
}

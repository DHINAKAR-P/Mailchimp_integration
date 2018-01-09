var campaign_defaults_model = require("../models/Campaign_defaults");

module.exports.create_campaign_defaults = function(campaign_defaults ,callback){
    console.log("create campaign_defaults in dao------------",campaign_defaults);
    var campaign_defaults_value = new campaign_defaults_model(campaign_defaults);
    campaign_defaults_value.save(function(err,campaign_defaults){
        if(err){
            console.log("create list value err---",err)
            callback(err);
        }
        else{
            console.log("create list value success")
        callback(campaign_defaults);
    }
    })
}

// module.exports.update_list = function(list , callback){
//     list_model.findOneAndUpdate({_id : list.id},
//     { $set:list},
// { upsert:true , new : true},function(list,err){
//     if(err){
//     callback(err)
// }
// else{
//     callback(list)
// }
// })
// }

// module.exports.findbylistid = function(list_id ,callback){
//     list_model.findById(list_id,function(err,list){
//         if(err){
//             callback(err);
//         }
//         else{
//             callback(list);
//         }
//     })
// }

// module.exports.findall_list = function(callback){
//     list_model.find(function(err,list){
//         if(err){
//             callback(err);
//         }
//         else{
//             callback(list);
//         }
//     })
// }

// module.exports.delete_list = function(list_id ,callback){
//     list_model.findByIdAndRemove(list_id , function(err,data){
//         if(err){
//        callback(err);
//         }
//         else{
//             callback(data);
//         }
//     })
// }

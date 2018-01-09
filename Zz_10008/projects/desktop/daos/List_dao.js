var list_model = require("../models/List");
var contactmodel =require("../models/Contact");
var defaultmodel = require("../models/Campaign_defaults");
var membermodel = require("../models/Member")
module.exports.create_list = function(list ,callback){
    console.log("create list in dao------------",list);
    var list_value = new list_model(list);
    list_value.save(function(err,list){
        if(err){
            console.log("create list value err---",err)
            callback(err);
        }
        else{
            console.log("create list value success")
        callback(list);
    }
    })
}

module.exports.update_list = function(list , callback){
    list_model.findOneAndUpdate({_id : list.id},
    { $set:list},
{ upsert:true , new : true},function(list,err){
    if(err){
    callback(err)
}
else{
    callback(list)
}
})
}

module.exports.findbylistid = function(list_id ,callback){
    list_model.findById(list_id,function(err,list){
        if(err){
            callback(err);
        }
        else{
            callback(list);
        }
    })
}

module.exports.findall_list = function(callback){
    console.log("entering into all list in dao")
    list_model.find().populate("contact campaign_defaults member stats")
        .exec(function(err,list){
        if(err){
            console.log("error to  get all list ---->>> ",err)
            callback(err);
        }
        else{
           // console.log("finally get all list ---->>> ",list)
            callback(list);
        }
    })
}

module.exports.delete_list = function(list_id ,callback){
    list_model.findByIdAndRemove(list_id , function(err,data){
        if(err){
       callback(err);
        }
        else{
            callback(data);
        }
    })
}

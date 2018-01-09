var contact_model = require("../models/Contact");

module.exports.create_contact = function(contact ,callback){
    console.log("create contact in dao------------",contact);
    var contact_value = new contact_model(contact);
    contact_value.save(function(err,contact){
        if(err){
            console.log("create list value err---",err)
            callback(err);
        }
        else{
            console.log("create list value success")
        callback(contact);
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

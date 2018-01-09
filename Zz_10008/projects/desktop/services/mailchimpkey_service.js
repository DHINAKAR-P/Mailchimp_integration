// var key_dao = require("../daos/mailchimpkey_dao");

// module.exports.create_key = function(mailchimp , callback){
//     key_dao.create_key(mailchimp,function(value){
//         var id = value._id;
//         value.id = id;
//         callback(value);
//     })
// }

// module.exports.update_key = function(mailchimp , callback){
//     key_dao.update_key(mailchimp,function(value){
//         var id = value._id;
//         value.id = id;
//         callback(value);
//     })
// }

// module.exports.delete_key =function(mailchimp_id , callback){
//     key_dao.delete_key(mailchimp_id ,function(value){
//         var id = value._id;
//         value.id = id;
//         callback(value);
//     })
// }

// module.exports.findbyuserid = function(mailchimp_userid , callback){
//     key_dao.findbyuserid(mailchimp_userid,function(value){
//         var id = value._id;
//         value.id = id;
//         callback(value);
//     })
// }

// module.exports.findallmailchimp = function(callback){
//     key_dao.findallmailchimp(function(list_of_value){
//         var count = 0;
//         for(var i = 0; i<list_of_value.length; i++){
//         var id = list_of_value[i]._id; 
//         list_of_value[i].id = id;
//         count ++;
//         }
//         if(list_of_value.length === count)
//         callback(list_of_value);
//     })
// }
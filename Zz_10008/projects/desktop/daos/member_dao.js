var member_model = require("../models/Member");
var stats_dao = require("../daos/stats_dao")
var member_dao = require("../daos/member_dao")
var list_dao = require("../daos/List_dao")

module.exports.create_member = function(member ,callback){
    console.log("create member in dao------------",member);
    var member_value = new member_model(member);
    member_value.save(function(err,member){
        if(err){
            console.log("create list value err---",err)
            callback(err);
        }
        else{

            console.log("memberss id are ---->>>> ",member.id)
            list_dao.findbylistid(member.id , function(listdetails){
              console.log("listdetails are)))))))))))",listdetails);
              //member_dao.getmemberbyuserid(listdetails.id , function(member_count){
               // var count = 0;
               // for(var i =0 ; i<member_count.length ; i++){
               //   count = count + 1;
               // }
            //    console.log("%%%%%%list details stats values are ", listdetails);
               if(listdetails !== null) {
               stats_dao.getstatsbyid(listdetails.stats ,function(statsdetails){
                   console.log("@@@@@statsdetails---",statsdetails)
                 //var countvalues = statsdetails.member_count+1;
                 //statsdetails.member_count = countvalues;
                 var statsvalues = statsdetails ;
                 statsvalues[0].member_count = statsvalues[0].member_count + 1;
                 stats_dao.update_stats(statsvalues,function(values){
                   if(values){
                     console.log("stats values saved s")
                   }
                 })
       
               //})
              })
            }

            })

        callback(member);
    }
    })
}

// module.exports.update_member = function(member , callback){
//     member_model.findOneAndUpdate({_id : member.id},
//     { $set:member},
// { upsert:true , new : true},function(err,member){
//     if(err){
//     callback(err)
// }
// else{
//     callback(member)
// }
// })
// }
module.exports.getmemberbyuserid = function(userid  ,callback){
    member_model.find({id : userid},function(memberbyuserid,err){
         if(err){
             callback(err);
         }
         else{
            console.log("~~~~getting member success")
             callback(memberbyuserid);
         }

    })
}

module.exports.get_all_list_member = function(member_id ,callback){
    console.log("member_id");
    member_model.findById(member_id,function(err,member){
        console.log("member data ------2222-",member)
        if(err){
            
            callback(err);
        }
        else{
            
            callback(member);
        }
    })
}

module.exports.get_all_member = function(callback){
    member_model.find(function(err,member){
        if(err){
            callback(err);
        }
        else{
            callback(member);
        }
    })
}

// module.exports.delete_member = function(member_id ,callback){
//     member_model.findByIdAndRemove(member_id , function(err,data){
//         if(err){
//        callback(err);
//         }
//         else{
//             callback(data);
//         }
//     })
// }

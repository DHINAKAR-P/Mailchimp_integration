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
               console.log("%%%%%%list details stats values are ", listdetails.stats);
               stats_dao.getstatsbyid(listdetails.stats ,function(statsdetails){
                   console.log("@@@@@statsdetails---",statsdetails)
                 //var countvalues = statsdetails.member_count+1;
                 //statsdetails.member_count = countvalues;
                 var statsvalues = statsdetails ;
                  console.log("SSSSSSSSSStats values  ==----- ",statsvalues)
                  console.log("SSSSSSSSSStats values  ==--count--- ",statsvalues[0].member_count)
                  console.log("SSSSSSSSSStats values  ==---incre count-- ",statsvalues[0].member_count+1)
                 statsvalues[0].member_count = statsvalues[0].member_count + 1;
                 stats_dao.update_stats(statsvalues,function(values){
                   if(values){
                     console.log("stats values saved s")
                   }
                 })
       
               //})
              })

            })

            console.log("create list value success")
        callback(member);
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
    list_model.findById(member_id,function(err,member){
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

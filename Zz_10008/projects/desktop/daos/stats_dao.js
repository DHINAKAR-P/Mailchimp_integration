var stats_model = require("../models/stats");

module.exports.create_stats = function(stats ,callback){
    console.log("111create stats in dao------------",stats);
    var stats_value = new stats_model(stats);
    stats_value.save(function(err,stats){
        if(err){
            console.log("create stats value err---",err)
            callback(err);
        }
        else{
            console.log("create stats value success")
        callback(stats);
    }
    })
}

module.exports.update_stats = function(stats , callback){
    stats_model.findByIdAndUpdate({_id : stats[0]._id},
    { $set:stats[0]},
{ upsert:true , new : true},function(stats,err){
    if(err){
    callback(err)
}
else{
    callback(stats)
}
})
}

module.exports.getstatsbyid = function(statsid  ,callback){
    stats_model.find({_id : statsid},function(statsbyid,err){
         if(err){
             callback(err);
         }
         else{
            console.log("~~~~getting stats success")
             callback(statsbyid);
         }

    })
}

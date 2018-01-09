var rss_opts_model = require("../models/rss_opts");

module.exports.create_rss_opts = function(rss_opts ,callback){
    console.log("create rss_opts in dao------------",rss_opts);
    var rss_opts_value = new rss_opts_model(rss_opts);
    rss_opts_value.save(function(err,rss_opts){
        if(err){
            console.log("create rss_opts value err---",err)
            callback(err);
        }
        else{
            console.log("create rss_opts value success")
        callback(rss_opts);
    }
    })
}

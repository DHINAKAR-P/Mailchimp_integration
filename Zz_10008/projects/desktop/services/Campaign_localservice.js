//mongoose

var dao = require("../daos/Campaign_dao")
var recipients_dao = require("../daos/recipients_dao")
var settings_dao = require("../daos/settings_dao")
var variate_settings_dao = require("../daos/variate_settings_dao")
var tracking_dao = require("../daos/tracking_dao")
var rss_opts_dao = require("../daos/rss_opts_dao")
var social_card_dao =require("../daos/social_card_dao")
module.exports.create_Campaign = function(campaign,callback) {
  console.log("create data in services----",campaign)
  


recipients_dao.create_recipients(campaign.recipients ,function(recipients){
  console.error("creating recepeitns---")
  
  var id = recipients._id;
  campaign.recipients = id;
  settings_dao.create_settings(campaign.settings , function(settings){
    console.error("creating settings---")
    var id = settings._id;
    campaign.settings = id;

    variate_settings_dao.create_variate_settings(campaign.variate_settings , function(variate_settings){
      console.error("creating variate_settings---")
      
      var id = variate_settings._id;
      campaign.variate_settings = id;

      tracking_dao.create_tracking(campaign.tracking ,function(tracking){
        console.error("creating trackings---")
        
        var id = tracking._id;
        campaign.tracking = id;

        rss_opts_dao.create_rss_opts(campaign.rss_opts , function(rss_opts){
          console.error("creating rss_opts---")
          
          var id = rss_opts._id;
          campaign.rss_opts = id;

          social_card_dao.create_social_card(campaign.social_card , function(social_card){
            console.error("creating social_Card---")
            
            var id = social_card._id;
            campaign.social_card = id;
            
            dao.create_Campaign(campaign,function (campaign){
               var id = campaign._id;
                  campaign.id = id;
                  console.log("after create campaign data in services----->>>>",campaign)
                  callback(campaign);
                });

          }) 
        })
      })
    })
  })
})

}
module.exports.update_Campaign = function(Campaign,callback) {
  dao.update_Campaign(Campaign,function (Campaign){
    var id = Campaign._id;
    Campaign.id = id;
    callback(Campaign);
  });
}
module.exports.search_Campaign_for_update = function(Campaign_id,callback) {
  dao.search_Campaign_for_update(Campaign_id,function (Campaign){
    var id = Campaign._id;
    Campaign.id = id;
    callback(Campaign)
  });
}
module.exports.delete_Campaign = function(Campaign_id,callback) {
  dao.delete_Campaign(Campaign_id,function (){
    callback();
  });
}
module.exports.get_all_Campaign = function(callback) {
  var campaigns = [];
  dao.get_all_Campaign(function (list_of_Campaign){
    var count = 0;
     for(var i = 0; i<list_of_Campaign.length; i++){
     var id = list_of_Campaign[i]._id; 
     list_of_Campaign[i].id = id;
     count ++;
     }
     if(list_of_Campaign.length === count){
         campaigns.push(list_of_Campaign);
      callback(list_of_Campaign)
  }
  });
}
//mongoose

var dao = require("../daos/Campaign_dao")
var recipients_dao = require("../daos/recipients_dao")
var settings_dao = require("../daos/settings_dao")
// var variate_settings_dao = require("../daos/variate_settings_dao")
// var tracking_dao = require("../daos/tracking_dao")
// var rss_opts_dao = require("../daos/rss_opts_dao")
// var social_card_dao =require("../daos/social_card_dao")
var list_dao = require("../daos/List_dao")
var member_dao = require("../daos/member_dao")
var nodemailer = require("nodemailer")
var campaign_template_dao = require("../daos/Campaign_template_dao")
var mailingdetails_dao = require("../daos/MailingDetailsDao")
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

    // variate_settings_dao.create_variate_settings(campaign.variate_settings , function(variate_settings){
    //   console.error("creating variate_settings---")
      
    //   var id = variate_settings._id;
    //   campaign.variate_settings = id;

    //   tracking_dao.create_tracking(campaign.tracking ,function(tracking){
    //     console.error("creating trackings---")
        
    //     var id = tracking._id;
    //     campaign.tracking = id;

        // rss_opts_dao.create_rss_opts(campaign.rss_opts , function(rss_opts){
        //   console.error("creating rss_opts---")
          
        //   var id = rss_opts._id;
        //   campaign.rss_opts = id;

        //   social_card_dao.create_social_card(campaign.social_card , function(social_card){
        //     console.error("creating social_Card---")
            
        //     var id = social_card._id;
        //     campaign.social_card = id;
            campaign.status = "draft";
            console.log("^^^^saving campaign------",campaign)
            dao.create_Campaign(campaign,function (campaign){
               var id = campaign._id;
                  campaign.id = id;
                  console.log("after create campaign data in services----->>>>",campaign)
                  callback(campaign);
                });

          }) 
    //     })
    //   })
   // })
//  })
})

}
module.exports.update_Campaign = function(campaign_id,campaign,callback) {
  dao.update_Campaign(campaign_id,campaign,function (Campaign){
    var id = Campaign._id;
    Campaign.id = id;
    Campaign.status = "saved";
    this.campaigndata = {campaigns : Campaign};
    callback(campaigndata);
  });
}
module.exports.search_Campaign_for_update = function(Campaign_id,callback) {
  console.log("campaign id values----get content--->>> ",Campaign_id)
  dao.search_Campaign_for_update(Campaign_id,function (Campaign){
    var id = Campaign._id;
    Campaign.id = id;

   // this.campaigndata = { campaigns : Campaign }
    callback(Campaign);
  });
}

//send message from campaign
module.exports.send_campaign = function(campaign_id ,userid , callback){
  dao.search_Campaign_for_update(campaign_id , function(campaign){
    mailingdetails_dao.findbyuserid(userid,function(userdetails){
campaign_template_dao.findtemplatebycampaignid(campaign_id,function(campaign_template){
 member_dao.getmemberbyuserid(campaign.recipients.list_id , function(listdata){
   var smtp_email = userdetails[0].smtp_email;
   var password = userdetails[0].smtp_password;
   var subject = campaign.settings.subject_line;
   var domain = userdetails[0].domain
   var title = campaign.settings.title;
    console.log("email , password and domain name ",userdetails[0].smtp_email , password , domain);
  //  console.log("edited template details-----  ",campaign_template[0].edited_html);
      var members_list = [];
      var edited_html = campaign_template[0].edited_html;
      for(var i =0 ; i<listdata.length ; i++){
      members_list.push(listdata[i].email_address)
      }
      var mail = nodemailer.createTransport({
       service: domain,
       auth: {
       user: smtp_email,
       pass: password
       }
      });
      
       var mailOptions = {
       from: smtp_email,
       to:members_list,
       subject: subject ,
       text: edited_html
      
       };
      
       mail.sendMail(mailOptions, function (error, info) {
       if (error) {
       console.log(error);
       } else {
       console.log('Email sent: ' + info.response);
       callback(info.response)
       }
       });

    })
  })
  })
})
}


module.exports.get_Campaign_content = function(Campaign_id,callback) {
  console.log("campaign id values----get content--->>> ",Campaign_id)
  dao.get_Campaign_content(Campaign_id,function (Campaign){
    var id = Campaign._id;
    Campaign.id = id;
   

   // this.campaigndata = { campaigns : Campaign }
    callback(Campaign.settings.template_id);
  });
}
module.exports.delete_Campaign = function(Campaign_id,callback) {
  dao.delete_Campaign(Campaign_id,function (){
    callback();
  });
}
module.exports.get_all_Campaign = function(callback) {
  // var campaigns = [];
  dao.get_all_Campaign(function (list_of_Campaign){
    var count = 0;
     for(var i = 0; i<list_of_Campaign.length; i++){
     var id = list_of_Campaign[i]._id; 
     list_of_Campaign[i].id = id;
     console.log("######get all campaign------  ",list_of_Campaign[i].recipients.list_id.name)
     list_of_Campaign[i].recipients.list_name = list_of_Campaign[i].recipients.list_id.name;
     count ++;
     }
     if(list_of_Campaign.length === count){
       //  campaigns.push(list_of_Campaign);
     //    console.log("cccccccccampaing data---",campaigns)
        this.campaigndata = { campaigns : list_of_Campaign }
      callback(campaigndata)
  }
  });
}
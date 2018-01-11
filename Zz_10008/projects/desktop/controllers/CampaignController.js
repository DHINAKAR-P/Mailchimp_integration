var service = require("../services/CampaignService")
var template_localservice = require("../services/Template_localservice")

//var mail_config = require("../config/mail_config")
var campaign_localservices = require("../services/Campaign_localservice");
var campaign_template_servce = require("../services/Campaign_template_localservice");
var template_edit_for_campaign = require("../services/TemplateService");
//GET ALl Template
module.exports.get_all_campaigns = function (req, res) {
//  console.log("getting all campaign in controller")
if (req.headers.api_key && req.headers.api_url) {
  service.get_all_campaigns(req.headers.api_key, req.headers.api_url, function (campaign) {
    res.json(campaign);
  });
}
else{
campaign_localservices.get_all_Campaign(function(campaign){
    res.status(200)
    res.json(campaign);
console.log("ffffffffffffff   after get all compaign from local db ",campaign)
  })
}
  }

//POST Campaign
module.exports.create_Campaign = function (req, res) {
  var Campaign = req.body;
  if (req.headers.api_key && req.headers.api_url) {
   // var Campaign = req.body;
    service.create_Campaign(Campaign,req.headers.api_key, req.headers.api_url,function (campaign) {
      res.status(201);
      res.json(campaign);
    });
  }
  else{
  campaign_localservices.create_Campaign(Campaign , function(data){
    res.status(200);
    res.json(data);
    
});
  

}

}
///campaigns/{campaign_id}/actions/send
module.exports.send_Campaign = function (req, res) {
  var campaign_id = req.params.id;
  var userid = req.params.userid;
  console.log("userid to send campaign id---",userid)
  if (req.headers.api_key && req.headers.api_url) {
   // var campaign_id = req.params.id;
    console.log("campaign_id - > ", campaign_id);
    service.send_Campaign(campaign_id, req.headers.api_key, req.headers.api_url, function (campaign) {
      res.status(201);
      res.json(campaign);
    });
  }
  else{
    campaign_localservices.send_campaign(campaign_id,userid,function(campaign){
     // console.log("controller sid data for send campaign  ",campaign);
     res.status(201);
     res.json("Mail Sent..!!");
    })
   }
}
//get_campaign_content

//GET Add campaign Content
module.exports.get_campaign_content = function(req, res) {
  var campaign_id = req.params.id;

  if (req.headers.api_key && req.headers.api_url) {
   // var campaign_id = req.params.id;
    service.get_campaign_content(campaign_id, req.headers.api_key, req.headers.api_url, function (campaignContent) {
     res.status(201);
      res.json(campaignContent);
    });
  }
  else{
    campaign_localservices.get_Campaign_content(campaign_id,function(campaign){
      res.status(201);
      res.json(campaign);
    })
  }
}

//GET Add campaign By ID
module.exports.get_campaign_By_Id = function(req, res) {
  var campaign_id = req.params.id;
  if (req.headers.api_key && req.headers.api_url) {
    var campaign_id = req.params.id;
    console.log("in campign get by id ------------> ", req.headers.api_key, req.headers.api_url);
    service.get_campaign_By_Id(campaign_id, req.headers.api_key, req.headers.api_url, function (campaignContent) {
      res.json(campaignContent);
    });
  }
else{
  campaign_localservices.search_Campaign_for_update(campaign_id,function(campaignContent){
   // console.log("SSSSuccesfully getting data using campaignid",campaignContent)
    res.json(campaignContent);
  })
}
}

//PUT Edit campaign Content
module.exports.put_campaign_content = function (req, res) {
  if (req.headers.api_key && req.headers.api_url) {
    var Campaign = req.body;
    var campaign = req.params.id;
    service.put_campaign_content(Campaign, req.headers.api_key, req.headers.api_url, campaign, function (campaignContent) {
      res.json(campaignContent);
    });
  }
  else{
    campaign_localservices.update_Campaign(campaign,Campaign,function(campaignContent){
      res.status(201);
      res.json(campaignContent);
    })
  }
}

module.exports.edit_Camp_Template = function (req, res) {
  var Template_id = req.params.id;
  var Template = req.body;

  console.log("&&&&^^^&edited_template values---->>>",Template)
  if (req.headers.api_key && req.headers.api_url) {
    // var Template = req.body;
    // var Template_id = req.params.id;
    template_edit_for_campaign.edit_Template(Template, Template_id, req.headers.api_key ,req.headers.api_url, function (template) {
      res.status(201);
      res.json(template);
    });
  }
  else{
    console.log("edited html template____-",Template);
    campaign_template_servce.create_campaign_template(Template_id, Template , function(template){
  res.status(201);
  res.json({template});
})
  }
}
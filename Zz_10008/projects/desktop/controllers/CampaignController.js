var service = require("../services/CampaignService")
//var mail_config = require("../config/mail_config")
var campaign_localservices = require("../services/Campaign_localservice");
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
  if (req.headers.api_key && req.headers.api_url) {
   // var campaign_id = req.params.id;
    console.log("campaign_id - > ", campaign_id);
    service.send_Campaign(campaign_id, req.headers.api_key, req.headers.api_url, function (campaign) {
      res.status(201);
      res.json(campaign);
    });
  }
}
//get_campaign_content

//GET Add campaign Content
module.exports.get_campaign_content = function(req, res) {
  var campaign_id = req.params.id;
  if (req.headers.api_key && req.headers.api_url) {
   // var campaign_id = req.params.id;
    service.get_campaign_content(campaign_id, req.headers.api_key, req.headers.api_url, function (campaignContent) {
      res.json(campaignContent);
    });
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
}
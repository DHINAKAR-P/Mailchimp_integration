var service = require("../services/CampaignService");

//GET ALl Template
module.exports.get_all_campaigns = function (req, res) {
  if (req.headers.api_key) {
    service.get_all_campaigns(function (campaign) {
      res.json(campaign);
    });
  }
}

//POST Campaign
module.exports.create_Campaign = function (req, res) {
  if (req.headers.api_key) {
    var Campaign = req.body;
    service.create_Campaign(Campaign, function (campaign) {
      res.status(201);
      res.json(campaign);
    });
  }
}

///campaigns/{campaign_id}/actions/send
module.exports.send_Campaign = function (req, res) {
  if (req.headers.api_key) {
    var campaign_id = req.params.id;
    console.log("campaign_id - > ", campaign_id);
    service.send_Campaign(campaign_id, function (campaign) {
      res.status(201);
      res.json(campaign);
    });
  }
}
//get_campaign_content

//GET Add campaign Content
module.exports.get_campaign_content = function (req, res) {
  if (req.headers.api_key) {
    var campaign_id = req.params.id;
    service.get_campaign_content(campaign_id, function (campaignContent) {
      res.json(campaignContent);
    });
  }
}

//PUT Edit campaign Content
module.exports.put_campaign_content = function (req, res) {
  if (req.headers.api_key) {
    var Campaign = req.body;
    var campaign = req.params.id;
    service.put_campaign_content(Campaign, campaign, function (campaignContent) {
      res.json(campaignContent);
    });
  }
}

//GET Add campaign By ID
module.exports.get_campaign_By_Id = function (req, res) {
  if (req.headers.api_key) {
    var campaign_id = req.params.id;
    service.get_campaign_By_Id(campaign_id, function (campaignContent) {
      res.json(campaignContent);
    });
  }
}

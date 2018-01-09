var Campaign_schema = require("../models/Campaign")
var recipients_model = require("../models/recipients")
var list_model = require("../models/List")
var settings_model = require("../models/settings")
var template_model = require("../models/Template")
var campaign_template_model = require("../models/Campaign_template")
module.exports.create_Campaign = function(Campaign,callback) {
  var Campaign = new Campaign_schema(Campaign)
  Campaign.save( function(Campaign, error) {
    if (error) {
      callback(error);
    } else {
      callback(Campaign);
    }
  });
}
module.exports.update_Campaign = function(campaign_id,campaign,callback) {
  Campaign_schema.findOneAndUpdate({ _id:campaign_id },{ $set:campaign},{ upsert: true, new: true },  function(Campaign, error) {
    if (error) {
      callback(error);
    } else {
      callback(Campaign);
    }
  });
}
module.exports.search_Campaign_for_update = function(Campaign_id,callback) {
  // Campaign_schema.findById({ _id: Campaign_id },  function(Campaign, error) {
    Campaign_schema.findById({ _id: Campaign_id })
    .populate([{path:'recipients' , model:recipients_model},{path:'settings' , model:settings_model,
    populate: {
      path: 'template_id',
      model: template_model
    }},{path:'edited_template' , model:campaign_template_model}])
    .exec(function(error,Campaign){
    if (error) {
      callback(error);
    } else {
      callback(Campaign);
    }
  });
}

module.exports.get_Campaign_content = function(Campaign_id,callback) {
  // Campaign_schema.findById({ _id: Campaign_id },  function(Campaign, error) {
    Campaign_schema.findById({ _id: Campaign_id })
    .populate([{path:'recipients' , model:recipients_model},{path:'settings' , model:settings_model,
    populate: {
      path: 'template_id',
      model: template_model
    }},{path:'edited_template' , model:campaign_template_model}])
    .exec(function(error,Campaign){
    if (error) {
      callback(error);
    } else {
      callback(Campaign);
    }
  });
}

module.exports.delete_Campaign = function(Campaign_id,callback) {
  Campaign_schema.findByIdAndRemove(Campaign_id,  function(Campaign, error) {
    if (error) {
      callback(error);
    } else {
      callback(Campaign);
    }
  });
}
module.exports.get_all_Campaign = function(callback) {
  console.log("1@@@@@@@@@@@@@@@@@@@@")
  //Campaign_schema.find(function(error , Campaign){
    Campaign_schema.find()
  .populate([{path:'recipients' , model:recipients_model , populate : {
    path:'list_id',
    model : list_model
  }},{path:'settings' , model:settings_model},{path:'edited_template' , model:campaign_template_model}] )
  .exec(function(err,Campaign) {
    if (err) {
      console.log("@@@@@@@@@@@@errrrrrrrrrrrrrrrrrr",error)
      callback(error);
    } else {
      console.log("&@@@@@@@@@@@@&campaing final data---",Campaign)
      callback(Campaign);
    }
  })//.populate('recipients').populate('settings')
}
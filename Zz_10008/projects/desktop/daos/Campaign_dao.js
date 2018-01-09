var Campaign_schema = require("../models/Campaign")

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
module.exports.update_Campaign = function(Campaign,callback) {
  Campaign_schema.findOneAndUpdate({ _id:Campaign._id },{ $set:Campaign},{ upsert: true, new: true },  function(Campaign, error) {
    if (error) {
      callback(error);
    } else {
      callback(Campaign);
    }
  });
}
module.exports.search_Campaign_for_update = function(Campaign_id,callback) {
  Campaign_schema.findById({ _id: Campaign_id },  function(Campaign, error) {
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
  Campaign_schema.find()
  .populate('recipients settings variate_settings tracking rss_opts social_card')
  .exec(function(Campaign, error) {
    if (error) {
      callback(error);
    } else {
      callback(Campaign);
    }
  });
}
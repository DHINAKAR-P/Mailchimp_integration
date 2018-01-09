var campaign_template_schema = require("../models/Campaign_template")

module.exports.create_campaign_template = function(campaign_id , campaign_template,callback) {
    var templatevalues = {};
  //  console.log("__)_)_campaign_template data ",campaign_template)
    templatevalues.campaign_id = campaign_id;
    templatevalues.edited_html = campaign_template.template.html;
    console.log("__)_)_campaign_template ",templatevalues)
var campaign_template_data = new campaign_template_schema(templatevalues)
  campaign_template_data.save( function(error,campaign_template) {
    if (error) {
      callback(error);
    } else {
      callback(campaign_template);
    }
  });
}
// module.exports.update_template = function(template_id , templatedata,callback) {
//     Template_schema.findOneAndUpdate({ _id:template_id },{ $set:templatedata},{ upsert: true, new: true },  function(Template, error) {
//     if (error) {
//       callback(error);
//     } else {
//       callback(Template);
//     }
//   });
// }
module.exports.findbycampaigntemplateid = function(Template_id,callback) {
    Template_schema.findById({ _id: Template_id },  function(Template, error) {
    if (error) {
      callback(error);
    } else {
      callback(Template);
    }
  });
}
// module.exports.delete_template = function(Template_id,callback) {
//     Template_schema.findByIdAndRemove(Template_id,  function(Template, error) {
//     if (error) {
//       callback(error);
//     } else {
//       callback(Template);
//     }
//   });
// }
// module.exports.findall_template = function(callback) {
//     console.log("findall dao")
//     Template_schema.find( function(Template, error) {
//     if (error) {
//       callback(error);
//     } else {
//       callback(Template);
//     }
//   });
// }
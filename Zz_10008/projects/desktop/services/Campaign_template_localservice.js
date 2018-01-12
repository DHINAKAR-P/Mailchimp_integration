
//mongoose
var campaign_template_dao = require('../daos/Campaign_template_dao');
var campaign_dao = require("../daos/Campaign_dao")
// var setting_dao = require("../daos/settings_dao")
module.exports.create_campaign_template = function(campaign_id,campaign_template , callback){
    
    campaign_template_dao.create_campaign_template(campaign_id,campaign_template , function(campaign_template){
        var id = campaign_template._id;
        campaign_template.id = id;
        if(campaign_template){
        var templatedata = {templates : campaign_template}
       var campaign = {} 
        campaign.edited_template = id;
        campaign.status = 'saved';
        campaign_dao.update_Campaign(campaign_template.campaign_id,campaign,function(campaignUpdated){
            if(campaignUpdated){
            }
        })
        callback(templatedata);
    }
    })
}

// module.exports.update_template = function(template_id , templatedata ,callback){
//     Template_dao.update_template(template_id , templatedata , function(template){
//         var id = template._id;
//         template.id = id;
//         var templatedata = {templates : template}
//         callback(templatedata);
//     })
// }

// module.exports.findbytemplateid = function(template_id , callback){
//     Template_dao.findbytemplateid(template_id , function(template){
//         var id = template._id;
//         template.id = id;
//         var templatedata = {templates : template}
//         callback(templatedata);
//     })
// }

// module.exports.findall_template = function(callback){
//     console.log("findall services")
    
//     Template_dao.findall_template(function(list_of_template){
//         var count = 0;
//         for(var i = 0; i<list_of_template.length; i++){
//         var id = list_of_template[i]._id; 
//         list_of_template[i].id = id;
//         count ++;
//         }
//         if(list_of_template.length === count){
//            // templates.push(list_of_template)
//         var templatedata = {templates : list_of_template}
//            callback(templatedata);
//     }
//     })
// }

// module.exports.delete_template = function(template_id , callback){
// Template_dao.delete_template(template_id , function(template){
//     callback(template);
// })
// }
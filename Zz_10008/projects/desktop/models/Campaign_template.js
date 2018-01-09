var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Campaign_template_schema = new mongoose.Schema({
    id:{type : Number},
    created_by : {type : Number},
    updated_by : {type : Number},
    updated_date : {type: Date ,default : Date.now()},
    campaign_id : {type: String},
    edited_html : {type: String}
 
},{
    versionKey : false

});
autoIncrement.initialize(mongoose);
Campaign_template_schema.plugin(autoIncrement.plugin ,{model : 'Campaign_template' , startAt:1} );
module.exports = mongoose.model('Campaign_template',Campaign_template_schema);
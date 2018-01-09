var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var mailchimpkey_schema = new mongoose.Schema({
    id:{type:Number},
    userid:{type:Number},
    mailchimp_apikey : {type:String}
},{
    versionKey:false
})
autoIncrement.initialize(mongoose);
mailchimpkey_schema.plugin(autoIncrement.plugin,{model:'mailchimpkey' , startAt:1});
module.exports = mongoose.model('mailchimpkey' , mailchimpkey_schema);


var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;
// var contact = require('./Contact')
// var campaign_defaults = require('./Campaign_defaults')
// var Member = require('./Member')

var List_schema = new mongoose.Schema({
    id:{type : Number},
   created_by : {type : Number},
   updated_by : {type : Number},
   updated_date : {type: Date ,default : Date.now()},
   name : {type: String },
   permission_reminder : {type:String},
   email_type_option : {type:String},
   contact:{type:Schema.Types.Number , ref:'contact'},
   campaign_defaults:{type:Schema.Types.Number , ref:'campaign_defaults'},
   member:{type:Schema.Types.Number , ref:'Member'},
   stats:{type:Schema.Types.Number , ref:'stats'}
},{
    versionKey: false
});
autoIncrement.initialize(mongoose);
List_schema.plugin(autoIncrement.plugin,{ model :'List' , startAt:1});
module.exports = mongoose.model('List',List_schema);


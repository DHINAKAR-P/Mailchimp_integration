var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var schema = mongoose.Schema;
var contact = require('./Contact')
var campaign_defaults = require('./Campaign_defaults')
var Member = require('./Member')

var List_schema = new mongoose.Schema({
   id:{type : Number},
   created_by : {type : Number},
   updated_by : {type : Number},
   updated_date : {type: Date ,default : Date.now()},
   name : {type: String },
   permission_reminder : {type:String},
   email_type_option : {type:String},
   contact:[{
    id: {type : Number},
    created_by: {type : Number},
    updated_by: {type : Number},
    updated_date:{type : Date ,default: Date.now()},
    company:{type : String},
    address1:{type:String},
    address2:{type:String},
    city:{type:String},
    state:{type:String},
    zip:{type:String},
    country:{type:String}
 
   }],
   campaign_defaults:[{
    id: {type : Number},
    created_by: {type : Number},
    updated_by: {type : Number},
    updated_date:{type : Date ,default: Date.now()},
    from_name:{type : String},
    from_email:{type : String},
    subject:{type : String},
    language:{type : String}
 

   }],
   member:[{
    id: {type : Number},
    created_by: {type : Number},
    updated_by: {type : Number},
    updated_date:{type : Date ,default: Date.now()},
    email_address:{type : String},
    status:{type:String}
   }]
},{
    versionKey: false
});
autoIncrement.initialize(mongoose);
List_schema.plugin(autoIncrement.plugin,{ model :'List' , startAt:1});
module.exports = mongoose.model('List',List_schema);


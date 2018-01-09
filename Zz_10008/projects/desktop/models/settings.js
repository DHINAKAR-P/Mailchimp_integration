var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var settings_schema = new mongoose.Schema({
   id: {type : Number},
   created_by: {type : Number},
   updated_by: {type : Number},
   updated_date:{type : Date ,default: Date.now()},
   authenticate:{type:Boolean},
   auto_footer:{type:Boolean},
   auto_tweet:{type:Boolean},
   drag_and_drop:{type:Boolean},
   fb_comments:{type:Boolean},
   folder_id:{type:String},
   from_name:{type:String},
   inline_css:{type:Boolean},
   reply_to:{type:String},
   subject_line:{type:String},
   template_id:{type:Number},
   timewarp:{type:Boolean},
   title:{type:String},
   to_name:{type:String},
   use_conversation:{type:Boolean}
   
},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
settings_schema.plugin(autoIncrement.plugin,{ model: 'settings', startAt: 1 });
module.exports = mongoose.model('settings', settings_schema);

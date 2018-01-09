var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var recipients_schema = new mongoose.Schema({
   id: {type : Number},
   created_by: {type : Number},
   updated_by: {type : Number},
   updated_date:{type : Date ,default: Date.now()},
   list_id:{type : Schema.Types.Number , ref:'List'},
   list_is_active:{type:Boolean},
   list_name : {type:String},
   recipient_count:{type:Number}

},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
recipients_schema.plugin(autoIncrement.plugin,{ model: 'recipients', startAt: 1 });
module.exports = mongoose.model('recipients', recipients_schema);

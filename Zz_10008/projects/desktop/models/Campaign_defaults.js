var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var campaign_defaults_schema = new mongoose.Schema({
     id:{type:Number},
//    campaign_defaults_id: {type: mongoose.Schema.Types.ObjectId,
//     index: true,
//     required: true,
//     auto: true,
//   },
   created_by: {type : Number},
   updated_by: {type : Number},
   updated_date:{type : Date ,default: Date.now()},
   from_name:{type : String},
   from_email:{type : String},
   subject:{type : String},
   language:{type : String}
},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
campaign_defaults_schema.plugin(autoIncrement.plugin,{ model: 'campaign_defaults', startAt: 1 });
var defaults = mongoose.model('campaign_defaults', campaign_defaults_schema);
module.exports = defaults;

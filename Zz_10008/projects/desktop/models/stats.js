

var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var stats_schema = new mongoose.Schema({
//    member_id: {type: mongoose.Schema.Types.ObjectId,
//     index: true,
//     required: true,
//     auto: true,
//   },
   id:{type:Number},
   created_by: {type : Number},
   updated_by: {type : Number},
   updated_date:{type : Date ,default: Date.now()},
   member_count:{type : Number},
   unsubscribe_count:{type : Number},
   cleaned_count:{type : Number},
   member_count_since_send:{type : Number},
   unsubscribe_count_since_send:{type : Number},
   cleaned_count_since_send:{type : Number},
   campaign_count:{type : Number},
   campaign_last_sent:{type : Number},
   avg_sub_rate:{type : Number},
   avg_unsub_rate:{type : Number},
   target_sub_rate:{type : Number},
   open_rate:{type : Number},
   click_rate:{type : Number},
   last_sub_date:{type:String},
   last_unsub_date:{type:String}
},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
stats_schema.plugin(autoIncrement.plugin,{ model: 'stats', startAt: 1 });
module.exports  = mongoose.model('stats', stats_schema);








var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;
var rss_opts_schema = new mongoose.Schema({
//    member_id: {type: mongoose.Schema.Types.ObjectId,
//     index: true,
//     required: true,
//     auto: true,
//   },
   id:{type:Number},
   created_by: {type : Number},
   updated_by: {type : Number},
   updated_date:{type : Date ,default: Date.now()},
   feed_url:{type : String},
   frequency:{type:String},
   //schedule:{type:Schema.Types.Number , ref:'schedule'},
   constrain_rss_img:{type:Boolean}
},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
rss_opts_schema.plugin(autoIncrement.plugin,{ model: 'rss_opts', startAt: 1 });
module.exports  = mongoose.model('rss_opts', rss_opts_schema);






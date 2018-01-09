

var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var social_card_schema = new mongoose.Schema({
//    member_id: {type: mongoose.Schema.Types.ObjectId,
//     index: true,
//     required: true,
//     auto: true,
//   },
   id:{type:Number},
   created_by: {type : Number},
   updated_by: {type : Number},
   updated_date:{type : Date ,default: Date.now()},
   image_url:{type : String},
   description:{type:String},
   title:{type:String}
},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
social_card_schema.plugin(autoIncrement.plugin,{ model: 'social_card', startAt: 1 });
module.exports  = mongoose.model('social_card', social_card_schema);






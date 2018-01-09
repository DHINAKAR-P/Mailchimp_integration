var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var contact_schema = new mongoose.Schema({
   id:{type:Number},
//     contact_id: {type: mongoose.Schema.Types.ObjectId,
//     index: true,
//     required: true,
//     auto: true,
//   },
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
},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
contact_schema.plugin(autoIncrement.plugin,{ model: 'contact', startAt: 1 });

var contact =  mongoose.model('contact', contact_schema);
module.exports = contact;
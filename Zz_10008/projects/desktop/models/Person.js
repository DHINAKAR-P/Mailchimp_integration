var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var Person_schema = new mongoose.Schema({
   id: {type : Number},
   created_by: {type : Number},
   updated_by: {type : Number},
   updated_date:{type : Date ,default: Date.now()},
   name:{type : String},
   price:{type: Number}

},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
Person_schema.plugin(autoIncrement.plugin,{ model: 'Person', startAt: 1 });
module.exports = mongoose.model('Person', Person_schema);

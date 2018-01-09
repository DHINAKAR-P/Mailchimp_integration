var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;
var Campaign_schema = new mongoose.Schema({
   id: {type : Number},
   created_by: {type : Number},
   updated_by: {type : Number},
   updated_date:{type : Date ,default: Date.now()},
   type:{type : String},
   recipients:{type:Schema.Types.Number , ref:'recipients'},
   settings:{type:Schema.Types.Number , ref:'settings'},
   variate_settings:{type:Schema.Types.Number , ref:'variate_settings'},
   tracking:{type:Schema.Types.Number , ref:'tracking'},
   rss_opts : {type:Schema.Types.Number , ref:'rss_opts'},
   social_card : {type:Schema.Types.Number , ref:'social_card'}
},{
    versionKey: false // You should be aware of the outcome after set to false
});
autoIncrement.initialize(mongoose);
Campaign_schema.plugin(autoIncrement.plugin,{ model: 'Campaign', startAt: 1 });
module.exports = mongoose.model('Campaign', Campaign_schema);
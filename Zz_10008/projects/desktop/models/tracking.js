var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var tracking_schema = new mongoose.Schema({
    id:{type : Number},
    created_by : {type : Number},
    updated_by : {type : Number},
    updated_date : {type: Date ,default : Date.now()},
    clicktale : {type:String},
    ecomm360: {type:Boolean},
    goal_tracking: {type:Boolean},
    google_analytics: {type:String},
    html_clicks: {type:Boolean},
    opens: {type:Boolean},
    text_clicks: {type:Boolean},
},{
    versionKey : false

});
autoIncrement.initialize(mongoose);
tracking_schema.plugin(autoIncrement.plugin ,{model : 'tracking' , startAt:1} );
module.exports = mongoose.model('tracking', tracking_schema);
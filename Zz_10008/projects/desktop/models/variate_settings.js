var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var variate_settings_schema = new mongoose.Schema({
    id:{type : Number},
    created_by : {type : Number},
    updated_by : {type : Number},
    updated_date : {type: Date ,default : Date.now()},
    winner_criteria : {type: String },
    
},{
    versionKey : false

});
autoIncrement.initialize(mongoose);
variate_settings_schema.plugin(autoIncrement.plugin ,{model : 'variate_settings' , startAt:1} );
module.exports = mongoose.model('variate_settings',variate_settings_schema);
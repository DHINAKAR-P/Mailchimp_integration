var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var User_schema = new mongoose.Schema({
    id:{type : Number},
    created_by : {type : Number},
    updated_by : {type : Number},
    updated_date : {type: Date ,default : Date.now()},
    firstname : {type: String },
    lastname : {type:String},
    username : {type: String },
    password : {type:String},
    mailchimp_api: {type:String},
    mailchimp_url: {type:String}
 
},{
    versionKey : false

});
autoIncrement.initialize(mongoose);
User_schema.plugin(autoIncrement.plugin ,{model : 'User' , startAt:1} );
module.exports = mongoose.model('User',User_schema);


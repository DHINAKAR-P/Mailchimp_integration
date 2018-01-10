
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;
var Mail_schema = new mongoose.Schema({
    id: { type: Number },
    userid: { type: Number },
    updated_date: { type: Date, default: Date.now() },
    mailchimp_api: { type: String },
    mailchimp_url: { type: String },
    domain: { type: String },
    smtp_email: { type: String },
    smtp_password: { type: String }
}, {
        versionKey: false
    });
autoIncrement.initialize(mongoose);
Mail_schema.plugin(autoIncrement.plugin, { model: 'MailingDetails', startAt: 1 });
module.exports = mongoose.model('MailingDetails', Mail_schema);


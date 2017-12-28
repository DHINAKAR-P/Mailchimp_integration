
var mail_json = require('../config/mail_config').mailchimp

module.exports.get_auth_header_value = function (callback) {
  var mailchimp_config = {};
  var auth = "Basic " + new Buffer("anystring:" + mail_json.api_key).toString("base64");
  mailchimp_config.api_key = mail_json.api_key;
  mailchimp_config.api_url = mail_json.api_url;
  if (auth) {
    mailchimp_config.auth = auth;
    callback(mailchimp_config);
  }
}

module.exports.get_auth_header_value = function (api_key, api_url, callback) {
    console.log("inside base mailchimp",api_key);
    console.log("inside base mailchimp",api_url);
    var mailchimp_config = {};
    var auth = "Basic " + new Buffer("anystring:" + api_key).toString("base64");
    mailchimp_config.api_key = api_key;
    mailchimp_config.api_url = api_url;
    if (auth) {
      mailchimp_config.auth = auth;
      callback(mailchimp_config);
    }
  }
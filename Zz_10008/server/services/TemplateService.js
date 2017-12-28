var BaseMailchimpService = require("./BaseMailchimpService")
var request = require("request");

//---------------------------
module.exports.get_all_Template = function (callback) {
  BaseMailchimpService.get_auth_header_value(function (maildata) {
    auth = maildata.auth;
    var options = {
      method: 'GET',
      url: maildata.api_url + 'templates',
      headers:
        {
          'content-type': 'application/json',
          authorization: auth
        },
      json: true
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      callback(body)
    });
  });
}


module.exports.get_all_Template_by_user = function (callback) {
  BaseMailchimpService.get_auth_header_value(function (maildata) {
    auth = maildata.auth;
    var options = {
      method: 'GET',
      url: maildata.api_url + 'templates?type=user',
      headers:
        {
          'content-type': 'application/json',
          authorization: auth
        },
      json: true
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      callback(body)
    });
  });
}


module.exports.get_Template_by_id = function (Template_id, callback) {
  BaseMailchimpService.get_auth_header_value(function (maildata) {
    auth = maildata.auth;
    var options = {
      method: 'GET',
      url: maildata.api_url + 'templates/'+Template_id,
      headers:
        {
          'content-type': 'application/json',
          authorization: auth
        },
      json: true
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      callback(body)
    });
  });
}

module.exports.create_Template = function (Template, callback) {
  console.log("Template - > ",Template)
  BaseMailchimpService.get_auth_header_value(function (maildata) {
    auth = maildata.auth;
    console.log("Template ------------- > ",Template);
    var options = {
      method: 'POST',
      url: maildata.api_url + 'templates',
      headers:
        {
          'content-type': 'application/json',
          authorization: auth
        },
        body:Template,
      json: true
    };
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      callback(body)
    });
  });
}
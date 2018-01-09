var BaseMailchimpService = require("./BaseMailchimpService")
var request = require("request");

//---------------------------
module.exports.get_all_Template = function (api_key, api_url, callback) {
  BaseMailchimpService.get_auth_header_value(api_key, api_url, function (maildata) {
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


module.exports.get_all_Template_by_user = function (api_key, api_url, callback) {
  BaseMailchimpService.get_auth_header_value(api_key, api_url, function (maildata) {
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


module.exports.get_Template_by_id = function (Template_id, api_key, api_url, callback) {
  BaseMailchimpService.get_auth_header_value(api_key, api_url, function (maildata) {
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

module.exports.create_Template = function (Template, api_key, api_url, callback) {
  console.log("Template - > ",Template)
  BaseMailchimpService.get_auth_header_value(api_key, api_url, function (maildata) {
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

module.exports.edit_Template = function (Template,Template_id, api_key, api_url, callback) {
  console.log("Template - > ",Template.name)
  console.log("Template_id -- > ",Template_id);
  BaseMailchimpService.get_auth_header_value(api_key, api_url, function (maildata) {
    auth = maildata.auth;
    console.log("Template ------------- > ",Template);
    var options = {
      method: 'PATCH',
      url: maildata.api_url + 'templates/'+Template_id,
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
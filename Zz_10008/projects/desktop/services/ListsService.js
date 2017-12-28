var BaseMailchimpService = require("./BaseMailchimpService")
var request = require("request");

//Get
module.exports.get_all_list_Member = function (list_id, callback) {
  var list_id = list_id;
  console.log("list_id- > ", list_id)
  BaseMailchimpService.get_auth_header_value(function (maildata) {
    auth = maildata.auth;
    var options = {
      method: 'GET',
      url: maildata.api_url + 'lists/' + list_id + '/members',
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

//GET List/members
module.exports.get_all_Lists = function (callback) {
  BaseMailchimpService.get_auth_header_value(function (maildata) {
    console.log("mail data- >>>>", maildata)
    auth = maildata.auth;
    var options = {
      method: 'GET',
      url: maildata.api_url + 'lists/',
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


module.exports.create_List = function (list, callback) {
  console.log("list------------------- - > ", list);
  BaseMailchimpService.get_auth_header_value(function (maildata) {
    console.log("create List- >>>>", maildata)
    auth = maildata.auth;
    var options = {
      method: 'POST',
      url: maildata.api_url + 'lists/',
      headers:
        {
          'content-type': 'application/json',
          authorization: auth
        },
      body: list,
      json: true
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      callback(body)

    });

  });
}

module.exports.add_member_to_list = function (list_id, memberdata, callback) {
  var list_id = list_id;
  BaseMailchimpService.get_auth_header_value(function (maildata) {
    auth = maildata.auth;
    var options = {
      method: 'POST',
      url: maildata.api_url + 'lists/' + list_id + '/members',
      headers:
        {
          'content-type': 'application/json',
          authorization: auth
        },
      body: memberdata,
      json: true
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      callback(body)

    });

  });
}
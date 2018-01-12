var BaseMailchimpService = require("./BaseMailchimpService")
var request = require("request");

module.exports.get_all_campaigns = function (api_key, api_url, callback) {
    BaseMailchimpService.get_auth_header_value(api_key, api_url, function (maildata) {
        auth = maildata.auth;
        var options = {
            method: 'GET',
            url: maildata.api_url + 'campaigns/?offset=0&count=1000',
            headers:
                {
                    'content-type': 'application/json',
                    authorization: auth
                },
            json: true
        };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
         // console.log("~~~~~~~getting all campaign data ",body)
            callback(body)
        });
    });
}

module.exports.create_Campaign = function (Campaign, api_key, api_url, callback) {
    BaseMailchimpService.get_auth_header_value(api_key, api_url, function (maildata) {
        auth = maildata.auth;
        var options = {
            method: 'POST',
            url: maildata.api_url + 'campaigns',
            headers:
                {
                    'content-type': 'application/json',
                    authorization: auth
                },
            body: Campaign,
            json: true
        };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            callback(body)
        });
    });
}


module.exports.send_Campaign = function (Campaign_id,api_key, api_url, callback) {
    BaseMailchimpService.get_auth_header_value(api_key, api_url, function (maildata) {
        auth = maildata.auth;
        console.log(maildata.api_url + 'campaigns/' + Campaign_id + '/actions/send');
        var options = {
            method: 'POST',
            url: maildata.api_url + 'campaigns/' + Campaign_id + '/actions/send',
            headers:
                {
                    'content-type': 'application/json',
                    authorization: auth
                },
            json: true
        };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            var status={};
            status = response.statusCode;
            console.log("-----------body  -  response---", response.statusCode);
            console.log("-----------body----", status);
            callback(status)
        });
    });
}


//Get  get_campaign_content 
module.exports.get_campaign_content = function (campaign_id, api_key, api_url, callback) {
    var campaign_id = campaign_id;
  //  console.log("campaign_id- > ", )
    BaseMailchimpService.get_auth_header_value(api_key, api_url, function (maildata) {
        auth = maildata.auth;
        var options = {
            method: 'GET',
            url: maildata.api_url + 'campaigns/' + campaign_id + '/content',
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

//PUT  edit_campaign_content 
module.exports.put_campaign_content = function (Campaign, api_key, api_url,campaign_id, callback) {
    // var campaign_id = campaign_id;
    console.log("campaign_id- > ", campaign_id)
    BaseMailchimpService.get_auth_header_value(api_key, api_url, function (maildata) {
        auth = maildata.auth;
        var options = {
            method: 'PUT',
            url: maildata.api_url + 'campaigns/' + campaign_id + '/content',
            headers:
                {
                    'content-type': 'application/json',
                    authorization: auth
                },
                body: Campaign,
            json: true
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            callback(body)

        });

    });
}

//Get get_campaign_By_Id
module.exports.get_campaign_By_Id = function (campaign_id, api_key, api_url,callback) {
    var campaign_id = campaign_id;
    console.log("Get campaign By id ---  ", campaign_id);
    console.log("in campign get by id ------------> ", api_key, api_url);
    BaseMailchimpService.get_auth_header_value(api_key, api_url, function (maildata) {
        auth = maildata.auth;
        var options = {
            method: 'GET',
            url: maildata.api_url + '/campaigns/' + campaign_id,
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

module.exports.edit_Template = function (Template,Template_id, api_key, api_url, callback) {
    // console.log("Template header - > ",Template.sections.header)
    console.log("Template_id -- > ",Template);
    BaseMailchimpService.get_auth_header_value(api_key, api_url, function (maildata) {
      auth = maildata.auth;
      console.log("Template ------------- > ",Template);
      var options = {
        method: 'PUT',
        url: maildata.api_url + 'campaigns/'+Template_id+"/content",
        headers:
          {
            'content-type': 'application/json',
            authorization: auth
          },
          body:Template,
        json: true
      };
      request(options, function (error, response, body) {
        if (error){
        console.log("errrrrrrrrrror occurssss-----",error)
        }
        // } throw new Error(error);
        callback(body)
      });
    });
  }
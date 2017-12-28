var BaseMailchimpService = require("./BaseMailchimpService")
var request = require("request");

module.exports.get_all_campaigns = function (callback) {
    BaseMailchimpService.get_auth_header_value(function (maildata) {
        auth = maildata.auth;
        var options = {
            method: 'GET',
            url: maildata.api_url + 'campaigns',
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

module.exports.create_Campaign = function (Campaign, callback) {
    BaseMailchimpService.get_auth_header_value(function (maildata) {
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


module.exports.send_Campaign = function (Campaign_id, callback) {
    BaseMailchimpService.get_auth_header_value(function (maildata) {
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

            console.log("-----------body----", body);
            callback(body)
        });
    });
}


//Get  get_campaign_content 
module.exports.get_campaign_content = function (campaign_id, callback) {
    var campaign_id = campaign_id;
    console.log("campaign_id- > ", campaign_id)
    BaseMailchimpService.get_auth_header_value(function (maildata) {
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


//Get get_campaign_By_Id
module.exports.get_campaign_By_Id = function (campaign_id, callback) {
    var campaign_id = campaign_id;
    console.log("Get campaign By id ---  ", campaign_id)
    BaseMailchimpService.get_auth_header_value(function (maildata) {
        auth = maildata.auth;
        var options = {
            method: 'GET',
            url: maildata.api_url + 'campaigns/' + campaign_id,
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
var service = require("../services/ListsService")
//GET Members By List ID
module.exports.get_all_list_Member = function (req, res) {
  if (req.headers.api_key && req.headers.api_url) {
    var list_id = req.params.id;
    service.get_all_list_Member(list_id, req.headers.api_key, req.headers.api_url, function (member) {
      res.json(member);
    });
  }
}
//GET Get All List
module.exports.get_all_Lists = function (req, res) {
  if (req.headers.api_key && req.headers.api_url) {
    service.get_all_Lists(req.headers.api_key, req.headers.api_url, function (lists) {
      res.json(lists);
    });
  }
}
//POST Create List
module.exports.create_List = function (req, res) {
  if (req.headers.api_key && req.headers.api_url) {
    var list = req.body;
    service.create_List(list, req.headers.api_key, req.headers.api_url, function (listdata) {
      res.status(201);
      res.json(listdata);
    });
  }
}
//POST Add member to list
module.exports.add_member_to_list = function (req, res) {
  if (req.headers.api_key && req.headers.api_url) {
    var list_id = req.params.id;
    var memberdata = req.body;
    service.add_member_to_list(list_id, req.headers.api_key, req.headers.api_url, memberdata, function (member) {
      res.json(member);
    });
  }
}
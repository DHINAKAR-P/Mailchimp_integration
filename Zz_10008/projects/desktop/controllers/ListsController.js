var service = require("../services/ListsService")
//GET Members By List ID
module.exports.get_all_list_Member = function (req, res) {
  if (req.headers.api_key) {
    var list_id = req.params.id;
    service.get_all_list_Member(list_id, function (member) {
      res.json(member);
    });
  }
}
//GET Get All List
module.exports.get_all_Lists = function (req, res) {
  if (req.headers.api_key) {
    service.get_all_Lists(function (lists) {
      res.json(lists);
    });
  }
}
//POST Create List
module.exports.create_List = function (req, res) {
  if (req.headers.api_key) {
    var list = req.body;
    service.create_List(list, function (listdata) {
      res.status(201);
      res.json(listdata);
    });
  }
}
//POST Add member to list
module.exports.add_member_to_list = function (req, res) {
  if (req.headers.api_key) {
    var list_id = req.params.id;
    var memberdata = req.body;
    service.add_member_to_list(list_id, memberdata, function (member) {
      res.json(member);
    });
  }
}
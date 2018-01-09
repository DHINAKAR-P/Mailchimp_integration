var service = require("../services/ListsService")
var list_localservice = require('../services/List_localservice');
var member_localservice = require("../services/member_localservice")
//GET Members By List ID
module.exports.get_all_list_Member = function(req, res) {
  var list_id = req.params.id;
  if (req.headers.api_key && req.headers.api_url) {
   // var list_id = req.params.id;
    service.get_all_list_Member(list_id, req.headers.api_key, req.headers.api_url, function (member) {
      res.json(member);
    });
  }
 else{
  member_localservice.get_all_list_member(list_id , function(member){
  res.status(201)
  res.json(member)
})
 }
}
//GET Get All List
module.exports.get_all_Lists = function(req, res) {
  //console.log("get all list called from controller");
 
  if (req.headers.api_key && req.headers.api_url) {
    service.get_all_Lists(req.headers.api_key, req.headers.api_url, function (lists) {
      res.json(lists);
    });
  }
 else{
  list_localservice.findall_list(function(list){
    res.status(201)
    res.json(list)
    if(list){
      console.log("success to get the list")
    }
  })
}
}
//POST Create List
module.exports.create_List = function(req, res) {
  var list = req.body;
  if (req.headers.api_key && req.headers.api_url) {
   // var list = req.body;
    service.create_List(list, req.headers.api_key, req.headers.api_url, function (listdata) {
      res.status(201);
      res.json(listdata);
    });
  }
  else{
list_localservice.create_list(list , function(data){
  res.status(201)
  res.json(data);
}) ;
  }
}
//POST Add member to list
module.exports.add_member_to_list = function(req, res) {
  var list_id = req.params.id;
  var memberdata = req.body;

  if (req.headers.api_key && req.headers.api_url) {
    // var list_id = req.params.id;
    // var memberdata = req.body;
    service.add_member_to_list(list_id, req.headers.api_key, req.headers.api_url, memberdata, function (member) {
      res.json(member);
    });
  }
else{
  member_localservice.create_member(memberdata,function(member){
    res.status(201)
    res.json(member)
    if(member){
      console.log("successfully created member")
    }
  })
}
}
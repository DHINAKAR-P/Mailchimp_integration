var service = require("../services/Person_Default_ActivityService")
module.exports.create_Person = function(req, res) {
  var Person = req.body;
  service.create_Person(Person,function (person){
    res.status(201);
    res.json(person);
  });
}
module.exports.update_Person = function(req, res) {
  var Person = req.body;
  service.update_Person(Person,function (person){
    res.status(201);
    res.json(person);

  });
}
module.exports.search_Person_for_update = function(req, res) {
  var Person_id = parseInt(req.params[0], 10);
  service.search_Person_for_update(Person_id,function (person){
    res.json(person);
  });
}
module.exports.delete_Person = function(req, res) {
  var Person_id = parseInt(req.params[0], 10);
  service.delete_Person(Person_id,function (){
    res.status(204);
    res.end();
  });
}
module.exports.get_all_Person = function(req, res) {
  var person_id = req.query.id;

  service.get_all_Person(function (person){
    res.json(person);
  });
}
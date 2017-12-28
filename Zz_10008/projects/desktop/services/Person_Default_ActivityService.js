var dao = require("../daos/Person_Default_ActivityDao")
module.exports.create_Person = function(Person,callback) {
  dao.create_Person(Person,function (person){
    callback(person);
  });
}
module.exports.update_Person = function(Person,callback) {
  dao.update_Person(Person,function (person){
    callback(person);
  });
}
module.exports.search_Person_for_update = function(Person_id,callback) {
  dao.search_Person_for_update(Person_id,function (person){
    callback(person)
  });
}
module.exports.delete_Person = function(Person_id,callback) {
  dao.delete_Person(Person_id,function (){
    callback();
  });
}
module.exports.get_all_Person = function(callback) {
  dao.get_all_Person(function (list_of_person){
    callback(list_of_person)
  });
}
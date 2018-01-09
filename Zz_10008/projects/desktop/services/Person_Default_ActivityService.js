var dao = require("../daos/Person_Default_ActivityDao")
module.exports.create_Person = function(Person,callback) {
  dao.create_Person(Person,function (person){
    var id = person._id;
    person.id = id;
    callback(person);
  });
}
module.exports.update_Person = function(Person,callback) {
  dao.update_Person(Person,function (person){
    var id = person._id;
    person.id = id;
    callback(person);
  });
}
module.exports.search_Person_for_update = function(Person_id,callback) {
  dao.search_Person_for_update(Person_id,function (person){
    var id = person._id;
     person.id = id;
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
    var count = 0;
    for(var i = 0; i<list_of_person.length; i++){
    var id = list_of_person[i]._id; 
    list_of_person[i].id = id;
    count ++;
    }
    if(list_of_person.length === count)
    callback(list_of_person)
  });
}
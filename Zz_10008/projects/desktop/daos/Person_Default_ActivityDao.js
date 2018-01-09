var Person_schema = require("../models/Person")

module.exports.create_Person = function(Person,callback) {
  var Person = new Person_schema(Person)
  Person.save( function(Person, error) {
    if (error) {
      callback(error);
    } else {
      callback(Person);
    }
  });
}
module.exports.update_Person = function(Person,callback) {
  Person_schema.findOneAndUpdate({ _id:Person._id },{ $set:Person},{ upsert: true, new: true },  function(Person, error) {
    if (error) {
      callback(error);
    } else {
      callback(Person);
    }
  });
}
module.exports.search_Person_for_update = function(Person_id,callback) {
  Person_schema.findById({ _id: Person_id },  function(Person, error) {
    if (error) {
      callback(error);
    } else {
      callback(Person);
    }
  });
}
module.exports.delete_Person = function(Person_id,callback) {
  Person_schema.findByIdAndRemove(Person_id,  function(Person, error) {
    if (error) {
      callback(error);
    } else {
      callback(Person);
    }
  });
}
module.exports.get_all_Person = function(callback) {
  Person_schema.find( function(Person, error) {
    if (error) {
      callback(error);
    } else {
      callback(Person);
    }
  });
}
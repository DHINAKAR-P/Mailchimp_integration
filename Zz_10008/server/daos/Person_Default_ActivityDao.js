var models = require("../models");
var sequelize = models.sequelize;
var PropertiesReader = require('properties-reader');
var sqlQuery = PropertiesReader(__dirname+'/../sql_queries/Person_Default_Activity_SQL.properties');
module.exports.create_Person = function(Person,callback) {
  var create_query = sqlQuery._properties.create_Person;
  sequelize.query(create_query, {
    replacements: {
    	name : Person.name,
    	price : Person.price,
    	created_by : 0,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.INSERT,
    model: models.Person
  }).then(function(person) {
		callback(person);
	});
}
module.exports.update_Person = function(Person,callback) {
  var update_query = sqlQuery._properties.update_Person;
  sequelize.query(update_query, {
    replacements: {
    	id : Person.id,
    	name : Person.name,
    	price : Person.price,
    	updated_by : 0
    },
    type : sequelize.QueryTypes.BULKUPDATE,
    model: models.Person
  }).then(function(person) {
		callback(person);
	});
}
module.exports.search_Person_for_update = function(Person_id,callback) {
  var search_for_update_query = sqlQuery._properties.search_for_update_Person;
  sequelize.query(search_for_update_query, {
    replacements: {
    	id: Person_id
    },
    type : sequelize.QueryTypes.SELECT,
    model: models.Person
  }).then(function(person) {
		callback(person[0]);
	});
}
module.exports.delete_Person = function(Person_id,callback) {
  var delete_query = sqlQuery._properties.delete_Person;
  sequelize.query(delete_query, {
    replacements: {
    	id: Person_id
    },
    type : sequelize.QueryTypes.DELETE,
    model: models.Person
  }).then(function() {
		callback();
	});
}
module.exports.get_all_Person = function(callback) {
  var get_all_query = sqlQuery._properties.get_all_Person;
  sequelize.query(get_all_query, {
    type : sequelize.QueryTypes.SELECT,
    model: models.Person
  }).then(function(person) {
		callback(person);
	});
}
'use strict';

module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define("Person", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    updated_date:DataTypes.DATE,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  },{
    createdAt: false,
    updatedAt: false,
    freezeTableName:true
  });
  return Person;
};
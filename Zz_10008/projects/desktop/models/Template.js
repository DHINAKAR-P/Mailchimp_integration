'use strict';

module.exports = function(sequelize, DataTypes) {
  var Template = sequelize.define("Template", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    updated_date:DataTypes.DATE,
    name: DataTypes.STRING,
    html: DataTypes.STRING
  },{
    createdAt: false,
    updatedAt: false,
    freezeTableName:true
  });
  return Template;
};
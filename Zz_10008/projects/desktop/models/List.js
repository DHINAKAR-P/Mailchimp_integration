'use strict';

module.exports = function(sequelize, DataTypes) {
  var List = sequelize.define("List", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    updated_date:DataTypes.DATE,
    name: DataTypes.STRING,
    permission_reminder:DataTypes.STRING,
    email_type_option:DataTypes.STRING(1),
  },{
    createdAt: false,
    updatedAt: false,
    freezeTableName:true
  });
  return List;
};
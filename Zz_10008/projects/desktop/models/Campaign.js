'use strict';
module.exports = function(sequelize, DataTypes) {
  var Campaign = sequelize.define("Campaign", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    updated_date:DataTypes.DATE,
    type: DataTypes.STRING
  },{
    createdAt: false,
    updatedAt: false,
    freezeTableName:true
  });
 
  return Campaign;
};
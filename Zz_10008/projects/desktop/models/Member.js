'use strict';

module.exports = function(sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER,
    updated_date:DataTypes.DATE,
    email_address: DataTypes.STRING,
    status: DataTypes.STRING
  },{
    createdAt: false,
    updatedAt: false,
    freezeTableName:true
  });
  return Member;
};
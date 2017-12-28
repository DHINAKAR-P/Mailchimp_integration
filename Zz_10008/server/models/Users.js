'use strict';

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    id: {
    	type : DataTypes.INTEGER,
    	primaryKey : true,
    	autoIncrement : true
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,

  },{
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName:true
  });
  return Users;
};


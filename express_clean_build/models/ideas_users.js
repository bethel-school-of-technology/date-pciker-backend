'use strict';
module.exports = (sequelize, DataTypes) => {
  const ideas_users = sequelize.define('ideas_users', {
    UsersId: DataTypes.INTEGER,
    IdeasId: DataTypes.INTEGER
  }, {});
  ideas_users.associate = function(models) {
    // associations can be defined here
  };
  return ideas_users;
};
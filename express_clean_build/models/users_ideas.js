'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_ideas = sequelize.define('users_ideas', {
    UserId: DataTypes.INTEGER,
    IdeasId: DataTypes.INTEGER
  }, {});
  users_ideas.associate = function(models) {
    // associations can be defined here
  };
  return users_ideas;
};
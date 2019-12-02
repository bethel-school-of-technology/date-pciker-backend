'use strict';
module.exports = (sequelize, DataTypes) => {
  const users_ideas = sequelize.define('users_ideas', {
        UserId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
        },    
        IdeasId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  }, {});
  users_ideas.associate = function(models) {
    // associations can be defined here
  };
  return users_ideas;
};
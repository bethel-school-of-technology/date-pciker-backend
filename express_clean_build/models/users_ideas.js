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
    },
  }, {});
  return users_ideas;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const ideas = sequelize.define('ideas', {
    IdeasId:{
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }, 
    IdeasTitle: DataTypes.STRING,
    IdeasBody: DataTypes.STRING
  }, {});
  ideas.associate = function(models) {
    // associations can be defined here
  };
  return ideas;
};
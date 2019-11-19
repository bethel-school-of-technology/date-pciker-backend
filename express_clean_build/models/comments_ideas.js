'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments_ideas = sequelize.define('comments_ideas', {
    CommentsId: DataTypes.INTEGER,
    IdeasId: DataTypes.INTEGER
  }, {});
  comments_ideas.associate = function(models) {
    // associations can be defined here
  };
  return comments_ideas;
};
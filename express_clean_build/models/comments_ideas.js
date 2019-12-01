'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments_ideas = sequelize.define('comments_ideas', {
      CommentsId: {
          type:DataTypes.INTEGER,
          primaryKey: true},
      IdeasId: {
          type: DataTypes.INTEGER,
      },
    }, {});
  return comments_ideas;
};
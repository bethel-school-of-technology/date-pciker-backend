'use strict';
module.exports = (sequelize, DataTypes) => {
  const comments = sequelize.define('comments', {
    CommentsId: {
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true},
    CommentsBody: DataTypes.STRING
  }, {});
  return comments;
};
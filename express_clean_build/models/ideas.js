/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ideas', {
    UserId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    Topic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IdeasId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }
  }, {
    tableName: 'ideas'
  });
};

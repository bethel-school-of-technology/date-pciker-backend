/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ideas_users', {
    IdeaId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'ideas',
        key: 'IdeasId'
      }
    },
    ideas_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'users',
        key: 'UserId'
      }
    }
  }, {
    tableName: 'ideas_users'
  });
};

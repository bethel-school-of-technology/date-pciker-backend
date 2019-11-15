/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    UserId: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true
    },
    FirstName: {
      type: DataTypes.STRING(255),
    },
    LastName: {
      type: DataTypes.STRING(255),
    },
    Email: {
      type: DataTypes.STRING(255),
      unique: true
    },
    Username: {
      type: DataTypes.STRING(255),
      unique: true
    },
    Password: {
      type: DataTypes.STRING(255),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    }
  }, {
    tableName: 'users'
  });
};

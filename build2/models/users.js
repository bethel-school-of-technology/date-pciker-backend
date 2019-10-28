/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    fullname: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'users'
  });
};

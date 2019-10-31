/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profiles', {
    profile_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'profiles'
  });
};

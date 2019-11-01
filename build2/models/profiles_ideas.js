/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profiles_ideas', {
    profiles_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    ideas_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'profiles_ideas'
  });
};

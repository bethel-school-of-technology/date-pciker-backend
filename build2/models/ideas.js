/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ideas', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    topic: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'ideas'
  });
};
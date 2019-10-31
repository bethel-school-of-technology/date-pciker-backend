/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ideas', {
        ideas_id: {
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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
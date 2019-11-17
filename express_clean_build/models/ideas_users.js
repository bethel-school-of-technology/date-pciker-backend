'use strict';
module.exports = (sequelize, DataTypes) => {
    var ideas_users = sequelize.define(
        'ideas_users', {
            IdeasId: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            UserId: {
                allowNull: false,
                // foreignKey: true,
                type: DataTypes.INTEGER
            }
        }, {}
    );
    return ideas_users;
};
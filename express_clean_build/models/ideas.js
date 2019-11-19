'use strict';
module.exports = (sequelize, DataTypes) => {
    const ideas = sequelize.define('ideas', {
        IdeasId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        IdeasTitle: DataTypes.STRING,
        IdeasBody: DataTypes.STRING
    }, {});
    // associations can be defined below
    ideas.associate = function(models) {
        ideas.belongsToMany(models.users, {
            through: 'ideas_users',
            as: 'users',
            foreignKey: 'ideasId',
            otherKey: 'usersId'
        });
    };
    // end of associations code block
    return ideas;
};
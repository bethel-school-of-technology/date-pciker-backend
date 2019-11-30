'use strict';
module.exports = (sequelize, DataTypes) => {
    const ideas = sequelize.define('ideas', {
        IdeasId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        IdeasTitle: DataTypes.STRING,
    }, {});
    // associations can be defined here
    return ideas;
};
// end of associations code block

'use strict';
module.exports = (sequelize, DataTypes) => {
<<<<<<< HEAD
  const ideas_users = sequelize.define('ideas_users', {
    UserId: DataTypes.INTEGER,
    IdeaId: DataTypes.INTEGER
  }, {});
  ideas_users.associate = function(models) {
    // associations can be defined here
  };
  return ideas_users;
=======
    var ideas_users = sequelize.define(
        'ideas_users', {
            IdeaId: {
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
>>>>>>> 308756a52e64dad91cd52f6b2c3ba91c520f0699
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define(
    'users',
    {
      UserId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      FirstName: DataTypes.STRING,
      LastName: DataTypes.STRING,
      Email: {
        type: DataTypes.STRING,
        unique: true
      },
      Username: {
        type: DataTypes.STRING,
        unique: true
      },
      Password: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );

  return users;
};




// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const users = sequelize.define('users', {
//     UserId: DataTypes.INTEGER,
//     FirstName: DataTypes.STRING,
//     LastName: DataTypes.STRING,
//     Email: DataTypes.STRING,
//     Username: DataTypes.STRING,
//     Password: DataTypes.STRING
//   }, {});
//   users.associate = function(models) {
//     // associations can be defined here
//   };
//   return users;
// };
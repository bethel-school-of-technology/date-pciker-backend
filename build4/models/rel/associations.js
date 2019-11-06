// module.exports = function(models) {
//     models.ideas.belongsto(models.users, {
//         through: models.users,
//         foreignKey: 'user_id'
//     });
// }

// module.exports = function(models) {
//     models.ideas.belongsToMany(models.users, {
//         through: models.ideas_users,
//         foreignKey: 'user_id'
//     });
//     models.users.belongsToMany(models.ideas, {
//         through: models.ideas_users,
//         foreignKey: 'ideas_id'
//     });
// }
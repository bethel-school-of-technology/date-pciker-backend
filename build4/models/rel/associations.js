<<<<<<< HEAD
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
=======
module.exports = function(models) {
    models.ideas.belongsToMany(models.users, {
        through: models.ideas_users,
        foreignKey: 'user_id'
    });
    models.users.belongsToMany(models.ideas, {
        through: models.ideas_users,
        foreignKey: 'ideas_id'
    });
}


// module.exports = function(models){
//     models.actor.belongsToMany(models.film, {
//         through: models.film_actor,
//         foreignKey: 'actor_id'
//     })
>>>>>>> 308756a52e64dad91cd52f6b2c3ba91c520f0699
// }
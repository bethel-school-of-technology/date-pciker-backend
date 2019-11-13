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
// }
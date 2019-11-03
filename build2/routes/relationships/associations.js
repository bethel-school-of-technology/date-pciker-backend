// module.exports = function(models) {
//     models.actor.belongsToMany(models.film, 
//         { 
//             through: models.film_actor,
//             foreignKey: 'actor_id'
//         });
//     models.film.belongsToMany(models.actor,
//         {
//             through: models.film_actor,
//             foreignKey: 'film_id'
//         });
// };

module.exports = function(models) {
    models.ideas.belongsToMany(models.profiles, {
        through: models.profiles_ideas,
        foreignKey: 'ideas_id'
    });
    models.profiles.belongsToMany(models.ideas, {
        through: models.profiles_ideas,
        foreignKey: 'profiles_id'
    });
};
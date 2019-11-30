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
// }

module.exports = function(models) {
    models.users.belongsToMany(models.ideas, 
        { 
            through: models.users_ideas,
            foreignKey: 'UserId'
        });
    models.ideas.belongsTo(models.users,
        {
            through: models.users_ideas,
            foreignKey: 'IdeasId'
        });
    models.ideas.belongsToMany(models.comments, 
        { 
            through: models.comments_ideas,
            foreignKey: 'CommentsId'
        });
    models.comments.belongsTo(models.ideas,
        {
            through: models.comments_ideas,
            foreignKey: 'IdeasId'
        });
}
module.exports = function(models) {
    models.users.belongsToMany(models.ideas, 
        { 
            through: models.ideas_users,
            foreignKey: 'UserId'
        });
    models.ideas.belongsToMany(models.users,
        {
            through: models.ideas_users,
            foreignKey: 'IdeasId'
        });
}
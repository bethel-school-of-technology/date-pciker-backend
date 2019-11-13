'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "ideas_users", deps: [ideas, users]
 *
 **/

var info = {
    "revision": 5,
    "name": "added_association3",
    "created": "2019-11-12T00:10:51.003Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "ideas_users",
        {
            "IdeaId": {
                "type": Sequelize.INTEGER,
                "field": "IdeaId",
                "primaryKey": true,
                "allowNull": false
            },
            "UserId": {
                "type": Sequelize.INTEGER,
                "field": "UserId",
                "foreignKey": true,
                "allowNull": false
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            },
            "user_id": {
                "type": Sequelize.INTEGER(11),
                "field": "user_id",
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "ideas",
                    "key": "IdeasId"
                },
                "unique": "ideas_users_ideas_id_user_id_unique"
            },
            "ideas_id": {
                "type": Sequelize.INTEGER(11),
                "field": "ideas_id",
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "users",
                    "key": "UserId"
                },
                "unique": "ideas_users_ideas_id_user_id_unique"
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize) {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length) {
                    let command = migrationCommands[index];
                    console.log("[#" + index + "] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                } else
                    resolve();
            }
            next();
        });
    },
    info: info
};
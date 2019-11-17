'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "IdeaId" from table "ideas_users"
 * removeColumn "user_id" from table "ideas_users"
 * addColumn "IdeasId" to table "ideas_users"
 * changeColumn "IdeasId" on table "ideas"
 * changeColumn "UserId" on table "ideas_users"
 * changeColumn "UserId" on table "ideas_users"
 * changeColumn "UserId" on table "ideas_users"
 * changeColumn "UserId" on table "ideas_users"
 * changeColumn "UserId" on table "ideas_users"
 *
 **/

var info = {
    "revision": 6,
    "name": "add_jointable",
    "created": "2019-11-16T19:25:39.880Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["ideas_users", "IdeaId"]
    },
    {
        fn: "removeColumn",
        params: ["ideas_users", "user_id"]
    },
    {
        fn: "addColumn",
        params: [
            "ideas_users",
            "IdeasId",
            {
                "type": Sequelize.INTEGER,
                "field": "IdeasId",
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas",
            "IdeasId",
            {
                "type": Sequelize.INTEGER(11),
                "field": "IdeasId",
                "primaryKey": true,
                "autoIncrement": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas_users",
            "UserId",
            {
                "type": Sequelize.INTEGER(11),
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "ideas",
                    "key": "IdeasId"
                },
                "unique": "ideas_users_UserId_UserId_unique",
                "field": "UserId",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas_users",
            "UserId",
            {
                "type": Sequelize.INTEGER(11),
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "ideas",
                    "key": "IdeasId"
                },
                "unique": "ideas_users_UserId_UserId_unique",
                "field": "UserId",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas_users",
            "UserId",
            {
                "type": Sequelize.INTEGER(11),
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "ideas",
                    "key": "IdeasId"
                },
                "unique": "ideas_users_UserId_UserId_unique",
                "field": "UserId",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas_users",
            "UserId",
            {
                "type": Sequelize.INTEGER(11),
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "ideas",
                    "key": "IdeasId"
                },
                "unique": "ideas_users_UserId_UserId_unique",
                "field": "UserId",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas_users",
            "UserId",
            {
                "type": Sequelize.INTEGER(11),
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "ideas",
                    "key": "IdeasId"
                },
                "unique": "ideas_users_UserId_UserId_unique",
                "field": "UserId",
                "allowNull": false
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};

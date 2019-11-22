'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "UserId" from table "ideas"
 * removeColumn "UsersId" from table "ideas_users"
 * removeColumn "id" from table "ideas_users"
 * addColumn "UserId" to table "ideas_users"
 * changeColumn "IdeasId" on table "ideas_users"
 * changeColumn "IdeasId" on table "ideas_users"
 * changeColumn "IdeasId" on table "ideas_users"
 * changeColumn "IdeasId" on table "ideas_users"
 *
 **/

var info = {
    "revision": 3,
    "name": "jordans_migration_1121",
    "created": "2019-11-21T22:37:41.428Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["ideas", "UserId"]
    },
    {
        fn: "removeColumn",
        params: ["ideas_users", "UsersId"]
    },
    {
        fn: "removeColumn",
        params: ["ideas_users", "id"]
    },
    {
        fn: "addColumn",
        params: [
            "ideas_users",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "users",
                    "key": "UserId"
                },
                "primaryKey": true,
                "field": "UserId"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas_users",
            "IdeasId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "ideas",
                    "key": "IdeasId"
                },
                "primaryKey": true,
                "field": "IdeasId"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas_users",
            "IdeasId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "ideas",
                    "key": "IdeasId"
                },
                "primaryKey": true,
                "field": "IdeasId"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas_users",
            "IdeasId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "ideas",
                    "key": "IdeasId"
                },
                "primaryKey": true,
                "field": "IdeasId"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas_users",
            "IdeasId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "ideas",
                    "key": "IdeasId"
                },
                "primaryKey": true,
                "field": "IdeasId"
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

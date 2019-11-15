'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "FullName" from table "users"
 * createTable "ideas_users", deps: [ideas]
 * changeColumn "IdeasId" on table "ideas"
 * changeColumn "IdeasId" on table "ideas"
 * changeColumn "UserId" on table "ideas"
 * changeColumn "Topic" on table "ideas"
 * changeColumn "Topic" on table "ideas"
 * changeColumn "Description" on table "ideas"
 * changeColumn "Description" on table "ideas"
 * changeColumn "createdAt" on table "ideas"
 * changeColumn "updatedAt" on table "ideas"
 * changeColumn "UserId" on table "users"
 * changeColumn "UserId" on table "users"
 * changeColumn "FirstName" on table "users"
 * changeColumn "FirstName" on table "users"
 * changeColumn "LastName" on table "users"
 * changeColumn "LastName" on table "users"
 * changeColumn "Email" on table "users"
 * changeColumn "Email" on table "users"
 * changeColumn "Username" on table "users"
 * changeColumn "Username" on table "users"
 * changeColumn "Password" on table "users"
 * changeColumn "Password" on table "users"
 * changeColumn "createdAt" on table "users"
 * changeColumn "updatedAt" on table "users"
 *
 **/

var info = {
    "revision": 4,
    "name": "andrews_migration",
    "created": "2019-11-15T01:50:37.077Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["users", "FullName"]
    },
    {
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
                    "unique": "ideas_users_user_id_user_id_unique"
                }
            },
            {}
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
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas",
            "UserId",
            {
                "type": Sequelize.INTEGER(11),
                "field": "UserId",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas",
            "Topic",
            {
                "type": Sequelize.STRING(255),
                "field": "Topic",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas",
            "Topic",
            {
                "type": Sequelize.STRING(255),
                "field": "Topic",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas",
            "Description",
            {
                "type": Sequelize.STRING(255),
                "field": "Description",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas",
            "Description",
            {
                "type": Sequelize.STRING(255),
                "field": "Description",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas",
            "createdAt",
            {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas",
            "updatedAt",
            {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "UserId",
            {
                "type": Sequelize.INTEGER(11),
                "field": "UserId",
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "UserId",
            {
                "type": Sequelize.INTEGER(11),
                "field": "UserId",
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "FirstName",
            {
                "type": Sequelize.STRING(255),
                "field": "FirstName",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "FirstName",
            {
                "type": Sequelize.STRING(255),
                "field": "FirstName",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "LastName",
            {
                "type": Sequelize.STRING(255),
                "field": "LastName",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "LastName",
            {
                "type": Sequelize.STRING(255),
                "field": "LastName",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "Email",
            {
                "type": Sequelize.STRING(255),
                "field": "Email",
                "unique": true,
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "Email",
            {
                "type": Sequelize.STRING(255),
                "field": "Email",
                "unique": true,
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "Username",
            {
                "type": Sequelize.STRING(255),
                "field": "Username",
                "unique": true,
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "Username",
            {
                "type": Sequelize.STRING(255),
                "field": "Username",
                "unique": true,
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "Password",
            {
                "type": Sequelize.STRING(255),
                "field": "Password",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "Password",
            {
                "type": Sequelize.STRING(255),
                "field": "Password",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "createdAt",
            {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "updatedAt",
            {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": true
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

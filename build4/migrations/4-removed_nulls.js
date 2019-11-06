'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "updatedAt" on table "ideas"
 * changeColumn "IdeasId" on table "ideas"
 * changeColumn "UserId" on table "ideas"
 * changeColumn "Topic" on table "ideas"
 * changeColumn "Topic" on table "ideas"
 * changeColumn "Description" on table "ideas"
 * changeColumn "Description" on table "ideas"
 * changeColumn "createdAt" on table "ideas"
 * changeColumn "IdeasId" on table "ideas"
 * changeColumn "UserId" on table "users"
 * changeColumn "UserId" on table "users"
 * changeColumn "FirstName" on table "users"
 * changeColumn "LastName" on table "users"
 * changeColumn "FullName" on table "users"
 * changeColumn "Email" on table "users"
 * changeColumn "Username" on table "users"
 * changeColumn "Password" on table "users"
 *
 **/

var info = {
    "revision": 4,
    "name": "removed_nulls",
    "created": "2019-11-06T18:13:13.150Z",
    "comment": ""
};

var migrationCommands = [{
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
            "users",
            "UserId",
            {
                "type": Sequelize.INTEGER(11),
                "field": "UserId",
                "autoIncrement": true,
                "primaryKey": true
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
                "autoIncrement": true,
                "primaryKey": true
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
                "field": "FirstName"
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
                "field": "LastName"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "FullName",
            {
                "type": Sequelize.STRING(255),
                "field": "FullName"
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
                "unique": true
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
                "unique": true
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
                "field": "Password"
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

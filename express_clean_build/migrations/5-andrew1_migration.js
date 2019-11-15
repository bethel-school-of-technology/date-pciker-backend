'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "UserId" on table "users"
 * changeColumn "UserId" on table "users"
 * changeColumn "FirstName" on table "users"
 * changeColumn "LastName" on table "users"
 * changeColumn "Email" on table "users"
 * changeColumn "Username" on table "users"
 * changeColumn "Password" on table "users"
 * changeColumn "createdAt" on table "users"
 * changeColumn "updatedAt" on table "users"
 *
 **/

var info = {
    "revision": 5,
    "name": "andrew1_migration",
    "created": "2019-11-15T03:04:38.010Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "users",
            "UserId",
            {
                "type": Sequelize.INTEGER(11),
                "field": "UserId",
                "primaryKey": true,
                "autoIncrement": true
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
                "autoIncrement": true
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
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "createdAt",
            {
                "type": Sequelize.DATE,
                "field": "createdAt"
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
                "field": "updatedAt"
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

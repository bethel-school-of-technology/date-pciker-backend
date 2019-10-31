'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "updatedAt" to table "users"
 * addColumn "createdAt" to table "users"
 * addColumn "password" to table "users"
 * addColumn "email" to table "users"
 * addColumn "username" to table "users"
 * changeColumn "fullname" on table "users"
 * changeColumn "lastname" on table "users"
 * changeColumn "firstname" on table "users"
 *
 **/

var info = {
    "revision": 4,
    "name": "new_migration",
    "created": "2019-10-31T14:51:59.703Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "users",
            "updatedAt",
            {
                "type": Sequelize.DATE,
                "field": "updatedAt"
            }
        ]
    },
    {
        fn: "addColumn",
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
        fn: "addColumn",
        params: [
            "users",
            "password",
            {
                "type": Sequelize.STRING,
                "field": "password"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "email",
            {
                "type": Sequelize.STRING,
                "field": "email",
                "unique": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "username",
            {
                "type": Sequelize.STRING,
                "field": "username",
                "unique": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "fullname",
            {
                "type": Sequelize.STRING,
                "field": "fullname",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "lastname",
            {
                "type": Sequelize.STRING,
                "field": "lastname",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users",
            "firstname",
            {
                "type": Sequelize.STRING,
                "field": "firstname",
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

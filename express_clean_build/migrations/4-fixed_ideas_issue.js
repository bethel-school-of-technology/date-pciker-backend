'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "IdeasBody" from table "ideas"
 * addColumn "id" to table "ideas_users"
 * changeColumn "IdeasId" on table "ideas_users"
 * changeColumn "IdeasId" on table "ideas_users"
 * changeColumn "IdeasId" on table "ideas_users"
 * changeColumn "IdeasId" on table "ideas_users"
 * changeColumn "UserId" on table "ideas_users"
 * changeColumn "UserId" on table "ideas_users"
 * changeColumn "UserId" on table "ideas_users"
 * changeColumn "UserId" on table "ideas_users"
 *
 **/

var info = {
    "revision": 4,
    "name": "fixed_ideas_issue",
    "created": "2019-11-22T22:10:26.700Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["ideas", "IdeasBody"]
    },
    {
        fn: "addColumn",
        params: [
            "ideas_users",
            "id",
            {
                "type": Sequelize.INTEGER,
                "field": "id",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
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
                "field": "IdeasId"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas_users",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "field": "UserId"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas_users",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "field": "UserId"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas_users",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "field": "UserId"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas_users",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "field": "UserId"
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

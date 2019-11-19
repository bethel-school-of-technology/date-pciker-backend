'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "comments", deps: []
 * createTable "comments_ideas", deps: []
 * createTable "ideas", deps: []
 * createTable "ideas_users", deps: []
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "myfirstmigration",
    "created": "2019-11-17T02:59:43.732Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "comments",
            {
                "CommentsId": {
                    "type": Sequelize.INTEGER,
                    "field": "CommentsId",
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "CommentsBody": {
                    "type": Sequelize.STRING,
                    "field": "CommentsBody"
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
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "comments_ideas",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "CommentsId": {
                    "type": Sequelize.INTEGER,
                    "field": "CommentsId"
                },
                "IdeasId": {
                    "type": Sequelize.INTEGER,
                    "field": "IdeasId"
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
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "ideas",
            {
                "IdeasId": {
                    "type": Sequelize.INTEGER,
                    "field": "IdeasId",
                    "primaryKey": true,
                    "autoIncrement": true
                },
                "IdeasTitle": {
                    "type": Sequelize.STRING,
                    "field": "IdeasTitle"
                },
                "IdeasBody": {
                    "type": Sequelize.STRING,
                    "field": "IdeasBody"
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
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "ideas_users",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "UsersId": {
                    "type": Sequelize.INTEGER,
                    "field": "UsersId"
                },
                "IdeasId": {
                    "type": Sequelize.INTEGER,
                    "field": "IdeasId"
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
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "users",
            {
                "UserId": {
                    "type": Sequelize.INTEGER,
                    "field": "UserId",
                    "primaryKey": true,
                    "autoIncrement": true,
                    "allowNull": false
                },
                "FirstName": {
                    "type": Sequelize.STRING,
                    "field": "FirstName"
                },
                "LastName": {
                    "type": Sequelize.STRING,
                    "field": "LastName"
                },
                "Email": {
                    "type": Sequelize.STRING,
                    "field": "Email",
                    "unique": true
                },
                "Username": {
                    "type": Sequelize.STRING,
                    "field": "Username",
                    "unique": true
                },
                "Password": {
                    "type": Sequelize.STRING,
                    "field": "Password"
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt"
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt"
                }
            },
            {}
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

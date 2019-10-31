'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "createdAt" from table "ideas"
 * removeColumn "updatedAt" from table "ideas"
 * removeColumn "fullname" from table "users"
 * removeColumn "lastname" from table "users"
 * removeColumn "firstname" from table "users"
 * removeColumn "userid" from table "users"
 * removeColumn "id" from table "ideas"
 * createTable "profiles", deps: []
 * createTable "profiles_ideas", deps: [profiles, ideas]
 * addColumn "Password" to table "users"
 * addColumn "Username" to table "users"
 * addColumn "Email" to table "users"
 * addColumn "LastName" to table "users"
 * addColumn "FirstName" to table "users"
 * addColumn "UserId" to table "users"
 * addColumn "ideas_id" to table "ideas"
 * changeColumn "updatedAt" on table "users"
 * changeColumn "createdAt" on table "users"
 *
 **/

var info = {
    "revision": 3,
    "name": "add_users_model",
    "created": "2019-10-31T21:00:00.157Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["ideas", "createdAt"]
    },
    {
        fn: "removeColumn",
        params: ["ideas", "updatedAt"]
    },
    {
        fn: "removeColumn",
        params: ["users", "fullname"]
    },
    {
        fn: "removeColumn",
        params: ["users", "lastname"]
    },
    {
        fn: "removeColumn",
        params: ["users", "firstname"]
    },
    {
        fn: "removeColumn",
        params: ["users", "userid"]
    },
    {
        fn: "removeColumn",
        params: ["ideas", "id"]
    },
    {
        fn: "createTable",
        params: [
            "profiles",
            {
                "profile_id": {
                    "type": Sequelize.INTEGER(10).UNSIGNED,
                    "field": "profile_id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "first_name": {
                    "type": Sequelize.STRING(45),
                    "field": "first_name",
                    "allowNull": false
                },
                "last_name": {
                    "type": Sequelize.STRING(45),
                    "field": "last_name",
                    "allowNull": false
                },
                "full_name": {
                    "type": Sequelize.STRING(45),
                    "field": "full_name",
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "profiles_ideas",
            {
                "profiles_id": {
                    "type": Sequelize.INTEGER(10).UNSIGNED,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "profiles",
                        "key": "profile_id"
                    },
                    "unique": "profiles_ideas_profiles_id_ideas_id_unique",
                    "field": "profiles_id",
                    "primaryKey": true,
                    "allowNull": false
                },
                "ideas_id": {
                    "type": Sequelize.INTEGER(11).UNSIGNED,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "ideas",
                        "key": "ideas_id"
                    },
                    "unique": "profiles_ideas_profiles_id_ideas_id_unique",
                    "field": "ideas_id",
                    "primaryKey": true,
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "Password",
            {
                "type": Sequelize.STRING,
                "field": "Password"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "Username",
            {
                "type": Sequelize.STRING,
                "field": "Username",
                "unique": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "Email",
            {
                "type": Sequelize.STRING,
                "field": "Email",
                "unique": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "LastName",
            {
                "type": Sequelize.STRING,
                "field": "LastName"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "FirstName",
            {
                "type": Sequelize.STRING,
                "field": "FirstName"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "field": "UserId",
                "primaryKey": true,
                "autoIncrement": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "ideas",
            "ideas_id",
            {
                "type": Sequelize.INTEGER(11).UNSIGNED,
                "field": "ideas_id",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
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

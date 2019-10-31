'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "firstname" on table "users"
 * changeColumn "lastname" on table "users"
 * changeColumn "fullname" on table "users"
 *
 **/

var info = {
    "revision": 7,
    "name": "initial_migration",
    "created": "2019-10-31T19:04:34.747Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "users",
            "firstname",
            {
                "type": Sequelize.STRING,
                "field": "firstname"
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
                "field": "lastname"
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
                "field": "fullname"
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

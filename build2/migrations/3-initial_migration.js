'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "updatedAt" from table "ideas"
 * removeColumn "createdAt" from table "ideas"
 * removeColumn "updatedAt" from table "users"
 * removeColumn "createdAt" from table "users"
 *
 **/

var info = {
    "revision": 3,
    "name": "initial_migration",
    "created": "2019-10-30T19:10:13.869Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["ideas", "updatedAt"]
    },
    {
        fn: "removeColumn",
        params: ["ideas", "createdAt"]
    },
    {
        fn: "removeColumn",
        params: ["users", "updatedAt"]
    },
    {
        fn: "removeColumn",
        params: ["users", "createdAt"]
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

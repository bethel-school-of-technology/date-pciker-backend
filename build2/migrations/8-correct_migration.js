'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "userid" on table "users"
 *
 **/

var info = {
    "revision": 8,
    "name": "correct_migration",
    "created": "2019-10-31T19:06:30.075Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "changeColumn",
    params: [
        "users",
        "userid",
        {
            "type": Sequelize.INTEGER(11),
            "field": "userid",
            "primaryKey": true,
            "autoIncrement": true,
            "allowNull": false
        }
    ]
}];

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

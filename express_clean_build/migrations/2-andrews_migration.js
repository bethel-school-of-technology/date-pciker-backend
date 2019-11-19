'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "UserId" to table "ideas"
 *
 **/

var info = {
    "revision": 2,
    "name": "andrews_migration",
    "created": "2019-11-19T02:56:13.726Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "ideas",
        "UserId",
        {
            "type": Sequelize.INTEGER,
            "field": "UserId",
            "foreignKey": "UserId",
            "model": "users"
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

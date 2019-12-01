'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "IdeasId" on table "comments_ideas"
 * changeColumn "IdeasId" on table "users_ideas"
 *
 **/

var info = {
    "revision": 4,
    "name": "fixed_issues",
    "created": "2019-12-01T04:05:56.105Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "comments_ideas",
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
            "users_ideas",
            "IdeasId",
            {
                "type": Sequelize.INTEGER,
                "field": "IdeasId"
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

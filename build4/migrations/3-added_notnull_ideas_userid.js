'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "ideasId" from table "ideas"
 * addColumn "IdeasId" to table "ideas"
 * changeColumn "UserId" on table "ideas"
 * changeColumn "UserId" on table "ideas"
 *
 **/

var info = {
    "revision": 3,
    "name": "added_notnull_ideas_userid",
    "created": "2019-11-04T22:33:19.516Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["ideas", "ideasId"]
    },
    {
        fn: "addColumn",
        params: [
            "ideas",
            "IdeasId",
            {
                "type": Sequelize.INTEGER,
                "field": "IdeasId",
                "primaryKey": true,
                "autoIncrement": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "field": "UserId",
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "field": "UserId",
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

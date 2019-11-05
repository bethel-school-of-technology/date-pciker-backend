'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "ideas", deps: []
 *
 **/

var info = {
    "revision": 2,
    "name": "added_ideas_table",
    "created": "2019-11-04T22:27:21.313Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "ideas",
        {
            "ideasId": {
                "type": Sequelize.INTEGER,
                "field": "ideasId",
                "primaryKey": true,
                "autoIncrement": true,
                "allowNull": false
            },
            "UserId": {
                "type": Sequelize.STRING,
                "field": "UserId"
            },
            "Topic": {
                "type": Sequelize.STRING,
                "field": "Topic"
            },
            "Description": {
                "type": Sequelize.STRING,
                "field": "Description"
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

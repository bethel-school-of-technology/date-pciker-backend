'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "ideas", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2019-10-22T22:40:36.982Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "ideas",
        {
            "id": {
                "type": Sequelize.INTEGER(11).UNSIGNED,
                "field": "id",
                "primaryKey": true,
                "allowNull": false
            },
            "topic": {
                "type": Sequelize.STRING(45),
                "field": "topic",
                "allowNull": false
            },
            "description": {
                "type": Sequelize.STRING(45),
                "field": "description",
                "allowNull": false
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

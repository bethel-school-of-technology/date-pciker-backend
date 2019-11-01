'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 2,
    "name": "added_user_model",
    "created": "2019-10-22T22:47:42.985Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "users",
        {
            "userid": {
                "type": Sequelize.INTEGER(11),
                "field": "userid",
                "primaryKey": true,
                "allowNull": false
            },
            "firstname": {
                "type": Sequelize.STRING(45),
                "field": "firstname",
                "allowNull": false
            },
            "lastname": {
                "type": Sequelize.STRING(45),
                "field": "lastname",
                "allowNull": false
            },
            "fullname": {
                "type": Sequelize.STRING(45),
                "field": "fullname",
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

'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "updatedAt" to table "users"
 * addColumn "createdAt" to table "users"
 *
 **/

var info = {
    "revision": 6,
    "name": "new_db_migration",
    "created": "2019-10-31T14:59:06.907Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
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
        fn: "addColumn",
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

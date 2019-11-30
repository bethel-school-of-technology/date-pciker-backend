'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * dropTable "users_comments"
 * createTable "comments_ideas", deps: []
 *
 **/

var info = {
    "revision": 2,
    "name": "changed_model_comments_ideas",
    "created": "2019-11-29T22:41:46.223Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "dropTable",
        params: ["users_comments"]
    },
    {
        fn: "createTable",
        params: [
            "comments_ideas",
            {
                "id": {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                "CommentsId": {
                    "type": Sequelize.INTEGER,
                    "field": "CommentsId"
                },
                "IdeasId": {
                    "type": Sequelize.INTEGER,
                    "field": "IdeasId"
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

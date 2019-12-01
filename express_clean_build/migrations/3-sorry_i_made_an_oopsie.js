'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "id" from table "users_ideas"
 * removeColumn "id" from table "comments_ideas"
 * addColumn "IdeasId" to table "comments"
 * addColumn "ideaIdeasId" to table "users_ideas"
 * addColumn "commentCommentsId" to table "comments_ideas"
 * changeColumn "CommentsId" on table "comments_ideas"
 * changeColumn "CommentsId" on table "comments_ideas"
 * changeColumn "CommentsId" on table "comments_ideas"
 * changeColumn "IdeasId" on table "comments_ideas"
 * changeColumn "IdeasId" on table "ideas"
 * changeColumn "IdeasId" on table "ideas"
 * changeColumn "CommentsId" on table "comments_ideas"
 * changeColumn "IdeasId" on table "ideas"
 * changeColumn "CommentsId" on table "comments_ideas"
 * changeColumn "IdeasId" on table "users_ideas"
 * changeColumn "UserId" on table "users_ideas"
 * changeColumn "UserId" on table "users_ideas"
 * changeColumn "UserId" on table "users_ideas"
 * changeColumn "UserId" on table "users_ideas"
 * changeColumn "UserId" on table "users_ideas"
 * changeColumn "UserId" on table "users_ideas"
 * changeColumn "IdeasId" on table "ideas"
 *
 **/

var info = {
    "revision": 3,
    "name": "sorry_i_made_an_oopsie",
    "created": "2019-12-01T02:36:49.150Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["users_ideas", "id"]
    },
    {
        fn: "removeColumn",
        params: ["comments_ideas", "id"]
    },
    {
        fn: "addColumn",
        params: [
            "comments",
            "IdeasId",
            {
                "type": Sequelize.INTEGER,
                "field": "IdeasId",
                "onUpdate": "CASCADE",
                "onDelete": "SET NULL",
                "references": {
                    "model": "ideas",
                    "key": "IdeasId"
                },
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "users_ideas",
            "ideaIdeasId",
            {
                "type": Sequelize.INTEGER,
                "field": "ideaIdeasId",
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "ideas",
                    "key": "IdeasId"
                },
                "unique": "users_ideas_UserId_ideaIdeasId_unique"
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "comments_ideas",
            "commentCommentsId",
            {
                "type": Sequelize.INTEGER,
                "field": "commentCommentsId",
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "comments",
                    "key": "CommentsId"
                },
                "unique": "comments_ideas_CommentsId_commentCommentsId_unique"
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "comments_ideas",
            "CommentsId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "ideas",
                    "key": "IdeasId"
                },
                "unique": "comments_ideas_CommentsId_commentCommentsId_unique",
                "field": "CommentsId",
                "primaryKey": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "comments_ideas",
            "CommentsId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "ideas",
                    "key": "IdeasId"
                },
                "unique": "comments_ideas_CommentsId_commentCommentsId_unique",
                "field": "CommentsId",
                "primaryKey": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "comments_ideas",
            "CommentsId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "ideas",
                    "key": "IdeasId"
                },
                "unique": "comments_ideas_CommentsId_commentCommentsId_unique",
                "field": "CommentsId",
                "primaryKey": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "comments_ideas",
            "IdeasId",
            {
                "type": Sequelize.INTEGER,
                "field": "IdeasId",
                "foreignKey": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas",
            "IdeasId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "NO ACTION",
                "references": {
                    "model": "users",
                    "key": "UserId"
                },
                "allowNull": true,
                "field": "IdeasId",
                "primaryKey": true,
                "autoIncrement": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas",
            "IdeasId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "NO ACTION",
                "references": {
                    "model": "users",
                    "key": "UserId"
                },
                "allowNull": true,
                "field": "IdeasId",
                "primaryKey": true,
                "autoIncrement": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "comments_ideas",
            "CommentsId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "ideas",
                    "key": "IdeasId"
                },
                "unique": "comments_ideas_CommentsId_commentCommentsId_unique",
                "field": "CommentsId",
                "primaryKey": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas",
            "IdeasId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "NO ACTION",
                "references": {
                    "model": "users",
                    "key": "UserId"
                },
                "allowNull": true,
                "field": "IdeasId",
                "primaryKey": true,
                "autoIncrement": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "comments_ideas",
            "CommentsId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "ideas",
                    "key": "IdeasId"
                },
                "unique": "comments_ideas_CommentsId_commentCommentsId_unique",
                "field": "CommentsId",
                "primaryKey": true
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
                "field": "IdeasId",
                "foreignKey": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users_ideas",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "users",
                    "key": "UserId"
                },
                "unique": "users_ideas_UserId_ideaIdeasId_unique",
                "field": "UserId",
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users_ideas",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "users",
                    "key": "UserId"
                },
                "unique": "users_ideas_UserId_ideaIdeasId_unique",
                "field": "UserId",
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users_ideas",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "users",
                    "key": "UserId"
                },
                "unique": "users_ideas_UserId_ideaIdeasId_unique",
                "field": "UserId",
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users_ideas",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "users",
                    "key": "UserId"
                },
                "unique": "users_ideas_UserId_ideaIdeasId_unique",
                "field": "UserId",
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users_ideas",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "users",
                    "key": "UserId"
                },
                "unique": "users_ideas_UserId_ideaIdeasId_unique",
                "field": "UserId",
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "users_ideas",
            "UserId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "CASCADE",
                "references": {
                    "model": "users",
                    "key": "UserId"
                },
                "unique": "users_ideas_UserId_ideaIdeasId_unique",
                "field": "UserId",
                "primaryKey": true,
                "allowNull": false
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "ideas",
            "IdeasId",
            {
                "type": Sequelize.INTEGER,
                "onUpdate": "CASCADE",
                "onDelete": "NO ACTION",
                "references": {
                    "model": "users",
                    "key": "UserId"
                },
                "allowNull": true,
                "field": "IdeasId",
                "primaryKey": true,
                "autoIncrement": true
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

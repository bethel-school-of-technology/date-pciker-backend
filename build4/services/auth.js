<<<<<<< HEAD
const jwt = require('jsonwebtoken');
const models = require('../models/index');

var authService = {
    signUser: function(user) {
        const token = jwt.sign({
                Username: user.Username,
                UserId: user.UserId
            },
            'secretkey', {
                expiresIn: '1h'
            }
        );
        return token;
    },
    verifyUser: function(token) { //<--- receive JWT token as parameter
        try {
            let decoded = jwt.verify(token, 'secretkey'); //<--- Decrypt token using same key used to encrypt
            return models.users.findByPk(decoded.UserId); //<--- Return result of database query as promise
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}

=======
const jwt = require('jsonwebtoken');
const models = require('../models/index');

var authService = {
    signUser: function(user) {
        const token = jwt.sign({
                Username: user.Username,
                UserId: user.UserId
            },
            'secretkey', {
                expiresIn: '1h'
            }
        );
        return token;
    },
    verifyUser: function(token) { //<--- receive JWT token as parameter
        try {
            let decoded = jwt.verify(token, 'secretkey'); //<--- Decrypt token using same key used to encrypt
            return models.users.findByPk(decoded.UserId); //<--- Return result of database query as promise
        } catch (err) {
            console.log(err);
            return null;
        }
    }
}

>>>>>>> 308756a52e64dad91cd52f6b2c3ba91c520f0699
module.exports = authService;
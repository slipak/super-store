require('./models');
var credantials = require('./db.credentials');

module.exports = {
    secret: "mysecret",
    url: `mongodb://${credantials.username}:${credantials.password}@ds011715.mlab.com:11715/appsdata`
};
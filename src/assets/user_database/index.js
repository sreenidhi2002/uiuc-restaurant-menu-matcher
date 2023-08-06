
module.exports = function (app, router) {
    app.use('/api/users', require('./users.js')(router));
};

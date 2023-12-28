const photoRouter = require('./photo')
function route(app) {
    //me
    app.use('/photo', photoRouter);
}

module.exports = route;

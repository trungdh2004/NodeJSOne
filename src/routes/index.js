const newRoute = require('./news');
const siteRoute = require('./site');

function route(app) {
    //new
    app.use('/news', newRoute);
    app.use('/', siteRoute);
    //home
}

module.exports = route;

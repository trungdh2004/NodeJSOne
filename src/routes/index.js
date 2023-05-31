const newRoute = require('./news');
const siteRoute = require('./site');
const coursesRoute = require('./courses');

function route(app) {
    //new
    app.use('/courses', coursesRoute);
    app.use('/news', newRoute);
    app.use('/', siteRoute);
    //home
}

module.exports = route;

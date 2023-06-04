const newRoute = require('./news');
const siteRoute = require('./site');
const coursesRoute = require('./courses');
const meRoute = require('./me');

function route(app) {
    //new
    app.use('/courses', coursesRoute);
    app.use('/me', meRoute);
    app.use('/news', newRoute);
    app.use('/', siteRoute);
    //home
}

module.exports = route;

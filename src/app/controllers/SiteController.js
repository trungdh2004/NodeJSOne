const Courses = require('../module/Courses')
const {mutipleMongoosetoObject,mongoosetoObject} = require('../../util/index')

class SiteController {
    index(req, res,next) {
        Courses.find({})
            .then(courses => res.render('home',{
                title:"hihihi",
                courses:mutipleMongoosetoObject(courses)
            }))
            .catch(next)
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

const Courses = require('../module/Courses')
const {mutipleMongoosetoObject,mongoosetoObject} = require('../../util/index')

class CoursesController {
    

    show(req, res, next) {
        Courses.findOne({slug: req.params.slug})
            .then(courses => {
                res.render('courses/show',{
                    courses:mongoosetoObject(courses)
                })
            })
            .catch(next)
    }
    // [get] courses/create
    create(req, res, next) {
        
        res.render('courses/create')
    }

    // [POST] courses/create

    store(req, res, next) {
        const course = new Courses(req.body)
        course.save()
            .then(()=> {
                res.redirect('/')
            })
    }
}

module.exports = new CoursesController();

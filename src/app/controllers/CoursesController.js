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
    // [GEt] courses/:id/edit

    edit(req, res, next) { 
        Courses.findById(req.params.id)
            .then(courses => {res.render('courses/edit',{
                courses: mongoosetoObject(courses)
            })})
            .catch(next)
            
    }
    // [PULL] courses/:id
    
    update(req, res, next) {
        Courses.updateOne({_id:req.params.id}, req.body )
            .then(courses => res.redirect('/me/stored/courses') )
            .catch(next)
        
    }
}

module.exports = new CoursesController();

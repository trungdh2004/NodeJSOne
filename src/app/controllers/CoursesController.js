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
                res.redirect('/me/stored/courses')
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
    // [DELETE] courses/:id

    destroy(req, res, next) {
        Courses.delete({_id:req.params.id})
            .then(courses => res.redirect('/me/stored/courses') )
            .catch(next)
    }
    // [DELETE] courses/:id/restore

    restore(req, res, next) {
        Courses.restore({_id:req.params.id})
            .then(() => res.redirect('/me/trash/courses') )
            .catch(next)
    }
    // [DELETE] courses/:id/force

    forceDestroy(req, res, next) {
        Courses.deleteOne({_id:req.params.id})
            .then(courses => res.redirect('/me/trash/courses') )
            .catch(next)
    }

    handelsformaction(req, res, next) {
        switch(req.body.action){
            case 'delete':
                Courses.delete({_id: {$in: req.body.couressIds}})
                    .then(courses => res.redirect('/me/stored/courses') )
                    .catch(next)
                break;
            default: res.json('message not defaule')
        }
        
    }
}

module.exports = new CoursesController();

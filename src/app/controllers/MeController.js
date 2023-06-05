const Courses = require('../module/Courses')
const {mutipleMongoosetoObject,mongoosetoObject} = require('../../util/index')



class meController {
    
    // [Get] /stored/courses
    
    storedCourses(req,res,next) {
        
        Promise.all([Courses.find(),Courses.countDocumentsDeleted()])
            .then(([courses,deleted]) => {
                res.render('me/stored-courses',{
                    deleted:deleted,
                    courses:mutipleMongoosetoObject(courses)
                    
                })
            })
            .catch(next);

        
    }
    trashCourses(req, res, next) {
        Courses.findDeleted()
        .then((courses) => {
            res.render('me/trash-courses',{
                courses:mutipleMongoosetoObject(courses)
                
            })
        })
        .catch(next)
    }
    
}

module.exports = new meController();

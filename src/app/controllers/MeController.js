const Courses = require('../module/Courses')
const {mutipleMongoosetoObject,mongoosetoObject} = require('../../util/index')



class meController {
    
    // [Get] /stored/courses
    
    storedCourses(req,res,next) {
        
        Courses.find()
            .then((courses) => {
                res.render('me/stored-courses',{
                    courses:mutipleMongoosetoObject(courses)
                    
                })
            })
            .catch(next)

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

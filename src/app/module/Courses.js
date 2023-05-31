
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Courses = new Schema({
    name: { type: String, required:true },
    description: { type: String, required:true },
    level: { type: String,  },
    videoID: { type: String, },
    slug: { type: String,},
},{
    TimeRanges:true
});

module.exports = mongoose.model('Courses', Courses);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Courses = new Schema({
    name: { type: String, required:true },
    description: { type: String, required:true },
    level: { type: String,  },
    videoID: { type: String, },
    slug: { type: String, slug:'name', unique: true},
    image: { type: String,},
},{
    timestamps:true
});

mongoose.plugin(slug);
Courses.plugin(mongooseDelete,{
    deletedAt : true,
    overrideMethods: 'all' });

module.exports = mongoose.model('Courses', Courses);
import mongoose from 'mongoose';
const Scheme = mongoose.Schema;


const Course = new Scheme({
    name: { type: String, default: 'hahaha', maxLength: 255 },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
const courseModel = mongoose.model('Course', Course);
export default courseModel 
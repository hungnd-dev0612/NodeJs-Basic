import mongoose from 'mongoose';
const Scheme = mongoose.Schema;


// const Course = new Scheme({
//     name: { type: String, default: 'hahaha', maxLength: 255 },
//     description: { type: String, maxLength: 600 },
//     image: { type: String, maxLength: 255 },
//     createdAt: { type: Date, default: Date.now },
//     updatedAt: { type: Date, default: Date.now },
// });

const languageSchema = new Scheme({
    be: [{ type: String }],
    fe: [{ type: String }]
})



const Info = new Scheme({
    // language: [languageSchema],
    name: { type: String, default: "hehe", maxLength: 255 },
    email: { type: String, default: "abc@gmail.com", maxLength: 255 },
    address: { type: String, default: "abc@gmail.com", maxLength: 255 },
    phone: { type: String, default: "abc@gmail.com", maxLength: 255 },
    education: { type: String, default: "abc@gmail.com", maxLength: 255 },
    selfInfo: { type: String, default: "abc@gmail.com", maxLength: 255 },
    skill: { type: String, default: "abc@gmail.com", maxLength: 255 },
    languages: [languageSchema],
    ui: [],
    framework: { type: String, default: "dang-hung", maxLength: 100 },
    db: [],
    experience: { type: String, default: "dang-hung", maxLength: 100 },
    companies: [],
    socialInfo: [],
    slug: { type: String, default: "dang-hung", maxLength: 100 },
}, { collection: 'info' });

const detailModel = mongoose.model('Info', Info);
export default detailModel 
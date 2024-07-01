import mongoose from 'mongoose';
const Scheme = mongoose.Schema;

const languageSchema = new Scheme({
    be: [{ type: String }],
    fe: [{ type: String }]
})

const frameworkSchema = new Scheme({
    be: [{ type: String }],
    fe: [{ type: String }]
})

const dbSchema = new Scheme({
    sql: [{ type: String }],
    noSql: [{ type: String }]
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
    framework: [frameworkSchema],
    db: [dbSchema],
    experience: { type: String, default: "dang-hung", maxLength: 100 },
    companies: [],
    socialInfo: [],
    slug: { type: String, default: "dang-hung", maxLength: 100 },
}, { collection: 'info' });

const infoModel = mongoose.model('Info', Info);
export default infoModel 
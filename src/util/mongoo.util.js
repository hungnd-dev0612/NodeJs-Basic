// const parseMongooToObjs = mongooseObjs => mongooseObjs.map(mongooseObj => mongooseObj.toObject())


const parseMongooToObj = mongooseObj => mongooseObj ? mongooseObj.toObject() : mongooseObj


const parseMongooToObjs = function (mongooseObjs) {
    return mongooseObjs.map(mongooseObj => mongooseObj.toObject())

}

// const parseMongooToObj = function (mongooseObj) {
//     return mongooseObj.toObject();
// }
export { parseMongooToObjs, parseMongooToObj };
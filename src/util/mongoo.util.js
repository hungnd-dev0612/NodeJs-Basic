const parseMongooToObjs = mongooseObjs => mongooseObjs.map(mongooseObj => mongooseObj.toObject())


const parseMongooToObj = mongooseObj => mongooseObj ? mongooseObj.toObject() : mongooseObj

export { parseMongooToObjs, parseMongooToObj };
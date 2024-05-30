import mongoose from 'mongoose';

 async function connectMongoDb() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/hungnd-learn-nodejs');
        console.log("connect succeeded !!!");
    } catch (error) {
        console.log("connect fail: ", error);
    }
}

export {connectMongoDb}


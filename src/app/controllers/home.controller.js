import courseModel from "../models/course.model.js";
import { parseMongooToObjs } from "../../util/mongoo.util.js";
class Home {
    async index(req, res, next) {
        try {
            const courses = (await courseModel.find())
            res.render('home', { courses: parseMongooToObjs(courses) });
        } catch (error) {
            next(error);
        }
    }
}

export default new Home();
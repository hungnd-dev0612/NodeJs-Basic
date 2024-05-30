import courseModel from "../models/CourseModels.js";

class SearchController {
    async index(req, res) {
        try {
            const courses = await courseModel.find();
            res.json(courses);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default new SearchController();
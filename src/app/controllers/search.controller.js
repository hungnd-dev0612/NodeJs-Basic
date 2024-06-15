import courseModel from "../models/course.model.js";

class Search {
  async index(req, res, next) {
    try {
      const courses = await courseModel.find();
      res.render('search', { courses });
    } catch (error) {
      next(error);
    }
  }
}
export default new Search();

import courseModel from "../models/course.model.js";
import { parseMongooToObj } from "../../util/mongoo.util.js";

class Detail {

    async showDetail(req, res, next) {
        try {
            const detail = courseModel.findOne({ slug: req.params.slug })
            res.render('detail', { detail: detail })
        } catch (error) {
            next(error)
        }
    }
}

export default new Detail();
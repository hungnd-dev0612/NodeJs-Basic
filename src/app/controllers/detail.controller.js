// import courseModel from "../models/course.model.js";
import detailModel from "../models/detail.model.js";
import { parseMongooToObj } from "../../util/mongoo.util.js";
class Detail {

    async showDetail(req, res, next) {
        try {
            const detail = await detailModel.findOne({ slug: req.params.slug })
            console.log("slug: ", req.params.slug);
            console.log("detail: ", detail);

            if (!detail) {
                return res.render('error404');
            }
            const { languages } = detail;
            const backend = languages.map(({ be }) => be).flat();
            const frontend = languages.map(({ fe }) => fe).flat();
            console.log("languages: ", backend, frontend);
            return res.render('details/detail', {
                detail: parseMongooToObj(detail),
                backend: backend,
                frontend: frontend
            });
        } catch (error) {
            next(error)
        }
    }
}

export default new Detail();
import infoModel from "../models/info.model.js";
import { parseMongooToObj } from "../../util/mongoo.util.js";
class Detail {

    async showDetail(req, res, next) {
        try {
            const info = await infoModel.findOne({ slug: req.params.slug })
            console.log("slug: ", req.params.slug);
            console.log("detail: ", info);

            if (!info) {
                return res.render('error404');
            }
            const { languages } = info;
            const { framework } = info;
            const { db } = info;
            const backendLanguage = languages.map(({ be }) => be).flat();
            const frontendLanguage = languages.map(({ fe }) => fe).flat();
            const backendFramework = framework.map(({ be }) => be).flat();
            const frontendFramework = framework.map(({ fe }) => fe).flat();
            const dbSql = db.map(({ be }) => be).flat();
            const dbNoSql = db.map(({ fe }) => fe).flat();
            console.log("languages: ", backendLanguage, frontendLanguage);
            return res.render('details/info', {
                info: parseMongooToObj(info),
                backendLanguage: backendLanguage,
                frontendLanguage: frontendLanguage,
                backendFramework: backendFramework,
                frontendFramework: frontendFramework,
                dbSql: dbSql,
                dbNoSql: dbNoSql

            });
        } catch (error) {
            next(error)
        }
    }
}

export default new Detail();
import express from 'express';
import morgan from 'morgan';
import * as path from "path";
import { routes } from '../src/routes/index.route.js'
import { fileURLToPath } from 'url'
import { engine } from 'express-handlebars';
import * as db from "./config/db/mongodb.config.js"

const port = 3000;
const app = express()
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public'))) //this line make main.hbs file go to the public
app.engine('hbs', engine({
    extname: '.hbs',
    helpers: {
        getProp: function (obj, propName) {
            return obj?.[propName];
        },
        json: function (context) {
            return JSON.stringify(context);
        }
    }
}));



app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, "views"));

routes(app);
db.connectMongoDb();



app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
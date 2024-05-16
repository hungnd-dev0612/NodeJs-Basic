import express from 'express';
import morgan from 'morgan';
import * as path from "path";
import { fileURLToPath } from 'url'
import { engine } from 'express-handlebars';
const port = 3000;
const app = express()

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public'))) //this line make main.hbs file go to the public
app.engine('hbs', engine({
    extname:'.hbs'
}));


app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, "./views"));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port)
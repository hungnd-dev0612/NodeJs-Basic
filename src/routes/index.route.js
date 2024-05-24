import newsRouter from './news.route.js'




 export function routes(app){
    app.use('/news',newsRouter);
}


import newsRoute from './news.route.js'
import siteRoute from './site.route.js'
import searchRoute from './search.route.js'
import homeRoute from './home.route.js'
import infoRoute from './info.route.js'
 export function routes(app){
    app.use('/news',newsRoute);
    app.use('/site',siteRoute);
    app.use('/search',searchRoute);
    app.use('/details',infoRoute)

    app.use('/',homeRoute);
}


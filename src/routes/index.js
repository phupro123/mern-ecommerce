const newsRouter = require('./news')
const siteRouter = require('./site')
const collectionRouter = require('./collection')
const meRouter = require('./me')

function route(app){
    app.use('/me',meRouter)
    
    app.use('/collection',collectionRouter)

    
    
    app.use('/news',newsRouter)
   
    app.use('/',siteRouter)
      
}

module.exports = route;
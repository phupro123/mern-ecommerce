const authRouter = require('./common/auth')
const userRouter = require('./common/user')

function route(app){
 
    app.use('/login',authRouter)

    app.use('/user',userRouter)
    //app.use('/collection',collectionRouter)

    
   // app.use('/news',newsRouter)
   
    //app.use('/',siteRouter)
      
}

module.exports = route;
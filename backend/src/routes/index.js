const authRouter = require('./common/auth')
const userRouter = require('./common/user')
const productRouter = require('./common/product')
const oderRouter = require('./common/oder')


function route(app){
 
    app.use('/login',authRouter)

    app.use('/user',userRouter)
     
    app.use('/product',productRouter)
      
    app.use('/oder',oderRouter)
}

module.exports = route;
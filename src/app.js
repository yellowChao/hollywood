import express from 'express'
import expressJwt from 'express-jwt'
import bodyParser from 'body-parser'
import tokenConfig from '../config/token.json'
import logger from './logger'
import AccountRouter from './accounts/router'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//验证token是否过期
app.use(expressJwt({ secret: tokenConfig.secretKey}).unless({path: ['/register']}))

//模块路由
app.use(AccountRouter)

const server = app.listen(8000,() => {
    const port = server.address().port
    logger.info(`listening on http://127.0.0.1:${port}`)
})

export default server

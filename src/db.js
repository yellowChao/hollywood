import mongoose from 'mongoose'

// const uri = 'mongodb://admin:123456@localhost:27017/3ss?authSource=admin'
const options = {
    user: 'admin',
    pwd: '123456',
    host: 'localhost',
    port: '27017',
    database: 'hollywood',
    authSource: 'admin',
}

const uri = `mongodb://${options.user}:${options.pwd}@${options.host}:${options.port}/${options.database}?authSource=${options.authSource}`

mongoose.Promise = global.Promise
mongoose.connect(uri)

export default mongoose

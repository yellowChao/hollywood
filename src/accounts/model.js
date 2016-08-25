import db from '../db.js'
import logger from '../logger'

const Schema = db.Schema

const accountSchema = new Schema(
    {
        name: { type: String, maxlength: 15 },
        password: { type: String, maxlength: 20 },
        gender: { type: String, enum: ['male', 'female'] },
        email: { type: String, maxlength: 25 },
        avatar: { type: String },
        age: { type: Number },
        create_date: { type: Date },
        update_date: { type: Date },
    },
    {
        versionKey: false,
    },
)

accountSchema.pre('save', function(next) {
    const currentDate = new Date()
    if (!this.create_date) {
        this.create_date = currentDate
    } else {
        this.update_date = currentDate
    }
    next()
})

accountSchema.post('save', function(doc) {
  logger.info(`Account ${doc._id} was saved.`)
})

accountSchema.methods.sayHi = () => (console.log('sayHi()!!!!!'))

const Account = db.model('Account', accountSchema)

export default Account

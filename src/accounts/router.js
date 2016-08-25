import express from 'express'
import jsonwebtoken from 'jsonwebtoken'
import tokenConfig from '../../config/token.json'
import AccountService from './service'


const router = express.Router()

router.post('/register', async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const account = await AccountService.save({email, password})
    const token = jsonwebtoken.sign(account, tokenConfig.secretKey, {expiresIn: tokenConfig.expiresIn})
    res.status(201).json({token, account})
})

export default router

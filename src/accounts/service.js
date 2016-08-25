import Account from './model'

export default class AccountService {
    static async save(json) {
        const accountModel = new Account(json)
        const account = await accountModel.save()
        return account
    }
}

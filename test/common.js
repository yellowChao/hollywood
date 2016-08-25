import Common from '../src/common'
import sinon from 'sinon'
import chai from 'chai'
import fs from 'fs'

chai.should()

let sandbox

const fsStub = () => {
    sandbox.stub(fs, 'writeFile', (filePath, text, callback) => {
        console.log('this is fake fs.writeFile()')
        callback()
    })
}

describe('Common', () => {
    beforeEach(() => {
        sandbox = sinon.sandbox.create()
        fsStub()
    })
    afterEach(() => {
        sandbox.restore()
    })

    describe('#writeFile(str)', () => {
        it('should write text to some file', async () => {
            // Given
            const text = 'some text'

            await Common.writeFile(text)
        })
    })
})

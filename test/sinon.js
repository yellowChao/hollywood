import sinon from 'sinon'
import chai from 'chai'

chai.should()

describe('test sinon', () => {
    it('sinon -> spy', () => {
        const logSpy= sinon.spy(console, 'log')
        console.log(333333)
        var count = logSpy.callCount// 调用次数
        count.should.equals(1)
        logSpy.restore()
    })

    it('sinon -> mock', () => {
        var mock = sinon.mock(console)
        mock.expects('log').withArgs(1).returns('111111')
        let returnValue = console.log(1);
        mock.verify()
        returnValue.should.equals('111111')
        mock.restore()
    })
})

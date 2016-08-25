import supertest from 'supertest'
import app from '../src/app'
import chai from 'chai'
import sinon from 'sinon'
import Student from '../src/Student'

var request = supertest(app)

chai.should()

let sandbox

const studentStub = () => {
    //而stub 类方法只需要sandbox.stub(Student, 'classFuncSave', () => {}
    sandbox.stub(Student.prototype, 'save', () => {
        return 'yellow chao'
    })
}

describe('app.js rounter test', () => {
    beforeEach(() => {
        sandbox = sinon.sandbox.create()
        studentStub()
    })
    afterEach(() => {
        sandbox.restore()
    })

    describe('GET /hi', () => {
        it('should return text of welcome to hollywood!', (done) => {
            request
            .get('/hi')
            .expect((res) => {
                const result = res.text
                result.should.equals('welcome to hollywood!')
            })
            .end(done)
        })
    })

    describe('POST /students', () => {
        it('should save a student and return name', (done) => {
            request.post('/students')
            .type('form')
            .send({
                studentName: 'yellowchao',
            })
            .expect(201, done)
        })
    })

});

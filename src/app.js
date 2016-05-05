import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('welcome to hollywood!')
})

const server = app.listen(8000,() => {
    const port = server.address().port
    console.log(`hollywood server start on http://127.0.0.1:${port}`)
})

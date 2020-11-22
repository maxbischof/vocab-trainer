const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

const tests = [{ id: 0 }]

app.post('/test', (req, res) => {
  const receivedTest = req.body
  const lastID = tests[tests.length - 1].id
  receivedTest.id = lastID + 1
  tests.push(receivedTest)
  res.send(receivedTest.id.toString())
})

app.get('/test/:id', (req, res) => {
  res.send(tests.find((test) => test.id == req.params.id))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

const tests = [{ id: 0 }]
console.log(tests)

app.post('/test', (req, res) => {
  const receivedTest = req.body
  const lastID = tests[tests.length - 1].id
  receivedTest.id = lastID + 1
  tests.push(receivedTest)
  res.send(receivedTest.id.toString())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

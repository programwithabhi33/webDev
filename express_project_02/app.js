const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use("/blog", blog)
// app.use(express.static('files'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/api', (req, res) => {
  res.json({a:1, b:2, c: 3});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const app = express()
const port = 3100

app.get('/', (req, res) => {
  res.send('Hello Daniyal from the slack bot, Thank you for giving me life!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

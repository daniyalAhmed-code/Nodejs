
const express = require('express')
const app = express()
const port = 3030

app.get('/', (req, res) => {
  res.send('Hello World!')
})

console.log(process.env.PORT)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const express = require('express')
const app = express()
app.get('/',  (req, res) =>  res.send('Hello Worládasdasd')
)

app.listen(3000)
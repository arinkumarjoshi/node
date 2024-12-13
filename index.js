require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

// Home Route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Twitter Route
app.get('/twitter', (req, res) => {
  res.send('Now their name is X')
})

// Login Route
app.get('/login', (req, res) => {
  res.send('<h1>Please login from here</h1>')
})

// YouTube Channel Route
app.get('/ytchannel', (req, res) => {
  res.send('<h2>Youtube Arin Joshi</h2>')
})

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())
const port = process.env.PORT || 5000
const chef=require('./data/chef.json');
app.get('/', (req, res) => {
  res.send('Food melodies !')
})
app.get('/chef', (req, res) => {
    res.send(chef);
  });
app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedChef=chef.find(n=>parseInt(n.id) === id);
    console.log(selectedChef)
    res.send(selectedChef);
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express');
const cors = require('cors');
const app = express();
const {syncAndSeed, models} = require('./db')
const PORT = process.env.PORT || 3000;

//syncAndSeed()

app.use(cors());

app.get('/',(req,res,next) => {
  res.send('Home')
})


app.listen(PORT)

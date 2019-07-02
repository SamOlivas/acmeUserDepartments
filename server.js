const express = require('express');
const cors = require('cors');
const app = express();
const {syncAndSeed, models} = require('./db')
const PORT = process.env.PORT || 3000;

//syncAndSeed()

// logger function to help troubleshoot, please ignore
const logger = async () => {
  console.log(await models.Users.findAll())
}
//logger()

app.use(cors());

app.get('/',(req,res,next) => {
  res.send('Home')
})
app.get('/api/users/',async (req,res,next) => {
  try{
    const allUsers = await models.Users.findAll()
    if(!allUsers) {
      throw(ex)
    }
    res.send(allUsers)
  }
  catch(ex){
    res.send(ex)
    next()
  }
});
app.get('api/users/:id',(req,res,next) => {
  try{
    const queryId = req.params.id;
    foundUser = models.Users.findOne({
      where: {id: queryId}
    })
    if(!foundUser){
      throw('User not found')
    }
    res.send(foundUser)
  }
  catch(ex){
    res.send('User not found');
    next()
  }
})


app.listen(PORT)
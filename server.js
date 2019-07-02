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
//Routes for users
app.get('/api/users',async (req,res,next) => {
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
app.post('/api/users',async(req,res,next) => {
  try{
    const newUser = await models.Users.create(req.body)
    res.send(newUser)
  }
  catch(ex){
    res.send('Error')
    next()
  }
});
app.get('api/users/:id',(req,res,next) => {
  try{
    const queryId = req.params.id;
    foundUser = await models.Users.findByPk(queryId)
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

//Routes for departments
app.get('/api/departments',async(req,res,next) => {
  try{
    const allDepartments = await models.Departments.findAll()
    if(!allDepartments){
      throw('Error')
    }
    res.send(allDepartments)
  }
  catch(ex){
    res.send('Error')
    next()
  }
})
app.post('/api/departments',async(req,res,next) => {
  try{
    const newDepartment = await models.Departments.create(req.body)
    res.send(newDepartment)
  }
  catch(ex){
    res.send('Error')
    next()
  }
})
app.get('/api/departments/:id',async(req,res,next) => {
  try{
    const queryId = req.params.id;
    const foundDepartment = await models.Departments.findByPk(queryId)
    if(!foundDepartment){
      throw('Error')
    }
    res.send(foundDepartment)
  }
  catch(ex){
    res.send('Error')
    next()
  }
})

app.listen(PORT)

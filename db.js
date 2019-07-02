const Sequelize = require('sequelize');
const dbName = 'acme-departments'
const db = new Sequelize(process.env.DATABASE_URL || `postgres://localhost/${dbName}`)

const Users = db.define('user',{
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: Sequelize.STRING,
})
const Departments = db.define('department', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey:true
  },
  name: Sequelize.STRING,
})

syncAndSeed = async() => {
  await db.sync({force:true})
  await userSeed.map((user) => {
    Users.create(user)
  })
  await departmentSeed.map((dep) => {
    Departments.create(dep)
  })
}

//syncAndSeed()

//Seed Data
const userSeed = [
  {name: 'Goerge'},
  {name: 'Michael'},
  {name: 'Bluth'},
  {name: 'Buster'},
  {name: 'Job'}
]
const departmentSeed = [
  {name: 'Developement'},
  {name: 'Real Estate'},
  {name: 'Shenanigans'}
]

module.exports = {
  models: {
    Users,
    Departments
  },
  syncAndSeed
}

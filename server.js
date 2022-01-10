

const { Schema, model } = require('mongoose')

const BirdSchema = new Schema({
  name: String,
  age: Number,
  breed: String
})

const Bird = model('bird', BirdSchema)

Bird.create({
  name: 'America',
  age: 6,
  breed: 'Eagle'
})
  .then(bird => console.log(bird))
  .catch(err => console.log(err))




const CatSchema = new Schema({
  name: String,
  age: Number,
  breed: String
})

const Cat = model('cat', CatSchema)

Cat.create({
  name: 'Wilbert',
  age: 3,
  breed: 'British Shorthair'
})
  .then(cat => console.log(cat))
  .catch(err => console.log(err))





const express = require('express')
const { join } = require('path')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

require('./db')
  .then(() => app.listen(3000))
  .catch(err => console.log(err))
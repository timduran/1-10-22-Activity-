const { Schema, model } = require('mongoose')

const BirdSchema = new Schema({
  name: String,
  age: Number,
  breed: String
})
module.exports = model('bird', BirdSchema)

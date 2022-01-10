const { Schema, model } = require('mongoose')

const CatSchema = new Schema({
  name: String,
  age: Number,
  breed: String
})

module.exports = model('cat', CatSchema)

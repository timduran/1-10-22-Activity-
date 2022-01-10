const { Schema, model } = require('mongoose')

const BirdSchema = new Schema({
  name: String,
  age: Number,
  breed: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
})
module.exports = model('bird', Bird)

const { Schema, model } = require('mongoose')

const CatSchema = new Schema({
  name: String,
  age: Number,
  breed: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
})

module.exports = model('cat', Cat)

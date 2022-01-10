const { Schema, model } = require('mongoose')

const User = new Schema({
  name: String,
  age: Number,
  breed: String,
  bird: [{
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }],
  cat: [{
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }]
})

module.exports = model('user', User)


'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  name: {
    type: String,
    required: [true, 'Coloque o seu nome']
  },
  email: {
    type: String,
    required: [true, 'Informe o e-mail'],
    index: true,
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Defina uma senha']
  },
  role: [{
    type: String,
    required: true,
    enum: ['user', 'admin'],
    default: 'user'
  }]
})

module.exports = mongoose.model('User', schema)

const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [2, "Поле должно содержать не меньше 2 символов"],
    maxLength: [30, "Поле должно содержать не больше 30 символов"],
    required: [true, "Поле обязательно для заполнения"]
  },
  link: {
    type: String,
    required: [true, "Поле обязательно для заполнения"]
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, "Поле обязательно для заполнения"]
  },
  likes: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('card', cardSchema);
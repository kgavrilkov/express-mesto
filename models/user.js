const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [2, 'Поле должно содержать не меньше 2 символов'],
    maxLength: [30, 'Поле должно содержать не больше 30 символов'],
    required: [true, 'Поле обязательно для заполнения'],
  },
  about: {
    type: String,
    minLength: [2, 'Поле должно содержать не меньше 2 символов'],
    maxLength: [30, 'Поле должно содержать не больше 30 символов'],
    required: [true, 'Поле обязательно для заполнения'],
  },
  avatar: {
    type: String,
    required: [true, 'Поле обязательно для заполнения'],
  },
});

module.exports = mongoose.model('user', userSchema);

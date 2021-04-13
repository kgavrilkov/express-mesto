const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const {
  getUsers, getMe, getUserById, updateUser, updateAvatar,
} = require('../controllers/users');

router.get('/', celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(true),
}), getUsers);
router.get('/me', celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(true),
}), getMe);
router.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().alphanum().required(),
  }).unknown(true),
  headers: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(true),
}), getUserById);
router.patch('/me', celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(true),
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    about: Joi.string().min(2).max(30).required(),
  }).unknown(true),
}), updateUser);
router.patch('/me/avatar', celebrate({
  headers: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(true),
  body: Joi.object().keys({
    avatar: Joi.string().required(),
  }).unknown(true),
}), updateAvatar);

module.exports = router;

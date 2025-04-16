const Joi = require('joi');

const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  year: Joi.number().integer().required(),
  genre: Joi.string().required()
});

const validateBook = (req, res, next) => {
  const { error } = bookSchema.validate(req.body);
  
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  
  next();
};

module.exports = {
  validateBook
};
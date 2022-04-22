const { Schema, model } = require('mongoose');
const Joi = require('joi');

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for note'],
  },
  date: {
    type: String,
    
  },
  category: {
    type: String,
  },
  content: {
    type: String,
    required: [true, 'Set content for note'],
  },
  dates: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    default: "Active",
  },

}, { versionKey: false, timestamps: true });



const joiSchema = Joi.object({
  name: Joi.string().required(),
  date: Joi.string().required(),
  category: Joi.string().required(),
  content: Joi.string().required(),
  dates: Joi.string(),
  status: Joi.string()
});

const statusJoiSchema = Joi.object({
  status: Joi.string(),
});

const Contact = model('contact', contactSchema);

module.exports = {
  Contact,
  joiSchema,
  statusJoiSchema
};

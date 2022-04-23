export {};
const { Schema, model } = require('mongoose');
const Joi = require('joi');

const noteSchema = Schema({
  name: {
    type: String,
    required: [true, 'Set name for note'],
  },
  date: {
    type: String,
  },
  category: {
    type: String,
    required: [true, 'Set category for note'],
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
    default: "active",
  },

}, { versionKey: false, timestamps: true });

const joiSchema = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  content: Joi.string().required(),
});

const Note = model('note', noteSchema);

module.exports = {
  Note,
  joiSchema
};

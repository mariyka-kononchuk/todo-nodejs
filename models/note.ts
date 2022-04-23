export {};
import { Schema, model } from 'mongoose';
import Joi from 'joi';

interface INote {
  name: string;
  date: string;
  category: string;
  content: string;
  dates?: string;
  status: string;
}

const noteSchema = new Schema<INote>({
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

const Note = model<INote>('note', noteSchema);

module.exports = {
  Note,
  joiSchema
};

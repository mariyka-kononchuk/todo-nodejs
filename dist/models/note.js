"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var joi_1 = __importDefault(require("joi"));
var noteSchema = new mongoose_1.Schema({
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
var joiSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    category: joi_1.default.string().required(),
    content: joi_1.default.string().required(),
});
var Note = (0, mongoose_1.model)('note', noteSchema);
module.exports = {
    Note: Note,
    joiSchema: joiSchema
};

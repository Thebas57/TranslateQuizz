const mongoose = require("mongoose");

const WordSchema = new mongoose.Schema(
  {
    wordId: {
      type: String,
      required: true,
    },
    noTranslate: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 50,
      unique: true,
      lowercase: true,
    },
    translate: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 50,
      lowercase: true,
    },
    language: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("word", WordSchema);

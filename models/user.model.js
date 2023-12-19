import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, //remove white space
    },
    age: {
      type: String,
      required: true,
      trim: true, //remove white space
    },
    gender: {
      type: String,
      required: true,
      trim: true, //remove white space
    },
    contact: {
      type: String,
      required: true,
      trim: true, //remove white space
    },
    fee: {
      type: String,
      required: true,
      trim: true, //remove white space
    },
    slot: {
      type: String,
      required: true,
      trim: true, //remove white space
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);

import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    userOrder: { type: Object, default: {} },
  },
  { timestamps: true, minimize: false } //minimize false will save empty objects as well in db
);

export const Person = mongoose.model("Person", personSchema);

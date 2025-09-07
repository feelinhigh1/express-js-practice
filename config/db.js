import mongoose from "mongoose";

export const connectDB = async () => {
  const MONGODB_URI =
    "mongodb+srv://sushan:sushan242833sushan@cluster0.pv09ott.mongodb.net/express";

  // Connect to MongoDB
  await mongoose.connect(MONGODB_URI).then(() => {
    console.log("Database Connected");
  });
};

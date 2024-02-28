import mongoose from "mongoose";
let isConnected: boolean = false;
export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) {
    return console.log("mo mongo url");
  }
  if (isConnected) {
    return console.log("already connected");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, { dbName: "devOverFlow" });
    isConnected = true;
    console.log("mongodb connected");
  } catch (error) {
    console.log("mongodb connection failed", error);
  }
};

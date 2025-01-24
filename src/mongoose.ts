const mongoose = require("mongoose");

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  // prevent unknown filed queries
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("missing url");

  if (isConnected) return console.log("mongodb is connected");

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "RESTAPI with NODE.JS",
    });
    isConnected = true;
  } catch (error) {
    console.log("mongodb connection faild", error);
  }
};

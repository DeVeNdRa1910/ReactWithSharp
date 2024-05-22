import mongoose from "mongoose";

 async function connectMongoDB () {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Connection Successfull");
  } catch (error) {
    console.log(error.message);
  }
}

export default connectMongoDB
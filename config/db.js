import colors from "colors";
import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.ATLAS_URI);
    console.log(`Connected to database ${conn.connection.host}`.bgYellow.black);
  } catch (error) {
    console.log(`Error in connecting database ${error}`.bgRed.black);
  }
};

export default connectDB;

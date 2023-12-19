import cors from "cors";
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoute from "./routes/users.js";

dotenv.config();

//connect db
connectDB();
const app = express();
//middleware
app.use(cors());

app.use(express.json());

app.use("/api", authRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`.bgGreen.white);
});

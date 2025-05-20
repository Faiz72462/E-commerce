import express from "express";
import mongoose from "mongoose";
import Colors from "colors";

const app = express();
const PORT = process.env.PORT || 3000;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Connected to MongoDB Database ${conn.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Error in MongoDB ${error}`.bgRed.white);
    process.exit(1);
  }
};

app.all('*', (req, res) => {
  res.json({ "every thing": "is awesome" });
});

// Connect to the database before listening
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Listening for requests on port", PORT);
  });
});

export default connectDB;

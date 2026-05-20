const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config(); //load environment variables from .env file

const connectDB = async() => {
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB database connected")
  }catch(error){
    console.log("Connection failed", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
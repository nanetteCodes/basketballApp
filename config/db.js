const mongoose = require('mongoose');
const config = require('config');
const dotenv = require('dotenv')
dotenv.config()

// get from default.json
const db = process.env.mongoURI;
//connect to mongo gives back a promise
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

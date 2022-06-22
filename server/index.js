import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

// Load in environment variables
dotenv.config();

// Access MongoDB client
const MongoClient = mongodb.MongoClient;

// Set port number. If it cannot be accessed, set to 8000
const port = process.env.PORT || 8000;

MongoClient.connect(
  process.env.COUNTER_DB_URI,
  {
    maxPoolSize: 10, // 10 people can connect at any one time
    connectTimeoutMS: 2500, // After 2500ms, request times out
  }).catch(err => {
    console.error(err.stack);
    process.exit(1);
  }).then(async client => {
    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  });
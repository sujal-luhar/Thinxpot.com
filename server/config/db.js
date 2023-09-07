const mongoose = require("mongoose");
const dbURI = "mongodb://localhost:27017/my_database";

mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
  console.log(`Db connected to ${dbURI}`);
});

mongoose.connection.on("error", (err) => {
  console.error(`Mongoose connection error: ${err}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

module.exports = mongoose;

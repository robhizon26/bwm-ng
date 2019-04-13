const config = require("./config/dev");

const express = require("express");
const moongose = require("mongoose");
const bodyParser = require("body-parser");

const uri = config.DB_URI;
const FakeDb = require("./fake-db");
const rentalRoutes = require("./routes/rentals"),
  userRoutes = require("./routes/users");

moongose.connect(uri, {
  useNewUrlParser: true
}).then(() => {
  const fakeDb = new FakeDb();
    // fakeDb.seedDb();
});

const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(uri, {
  useNewUrlParser: true
});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const app = express();
app.use(bodyParser.json());
app.use("/api/v1/rentals", rentalRoutes);
app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
  console.log("I am running" + PORT);
});

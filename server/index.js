const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

//author Schema
const AuthorSchema = new Schema({
    name: String,
    Birthyear: Number,
    isDead: Number,
    ImageURL: String,
});

//model
const AuthorModel = mongoose.model("authors", AuthorSchema)

//MONGO DATABASE CONNECTION
DB_CONNECTION=process.env.DB_CONNECTION
DB_PASSWORD=process.env.DB_PASSWORD
mongoose.connect(
    DB_CONNECTION.replace("<password>",DB_PASSWORD)
    )
    .then(()=>console.log("mongo connect"))

app.get("/api", (req, res) => {
    res.send("Welcome APi");
  });

  //get All author
app.get("/api/author", async (req, res) => {
    const authors = await AuthorModel.find();
    res.status(200).send(authors);
  });
  

  //post
app.post("/api", async (req, res) => {
    const { name, Birthyear, isDead, ImageURL } = req.body;
    const newAuthor = new AuthorModel({
      name: name,
      Birthyear: Birthyear,
      isDead: isDead,
      ImageURL: ImageURL,
    });
    await newAuthor.save();
    res.status(201).send("created");
  });

PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`NODE APP listening on port ${PORT}`);
});
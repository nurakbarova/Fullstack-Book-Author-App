const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv");
const bodyParser = require("body-parser")
const mongooes = require("mongoose")
const Schema = mongooes.Schema
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

//author Schema
const AuthorSchema = new mongoose.Schema({
    name: String,
    birthday: Number,
    genre: String,
    isDead: Number,
})

//author model
const AutherModel = mongooes.model("`author`", AuthorSchema);


    //MONGO DATABASE CONNECTION
    DB_CONNECTION = process.env.DB_CONNECTION
    DB_PASSWORD = process.env.DB_PASSWORD
    mongoose.connect(DB_CONNECTION.replace("<password>",DB_PASSWORD))
    .then(()=> console.log("Mongo DB Connected!"))

    app.use('/api/author/', artist_router)
//SONGS
app.use('/api/songs/', song_router)




PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`we api ${PORT}`);
});
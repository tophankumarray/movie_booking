const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


async function db(){
    await mongoose.connect('mongodb://127.0.0.1:27017/movies')
    console.log("db connected")
}
db()

const movieSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
});


const Movie = mongoose.model('Movie', movieSchema);

app.get('/movies', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

app.post('/movies', async (req, res) => {
  const newMovie = new Movie(req.body);
  await newMovie.save();
  res.json(newMovie);
});



app.listen(5500, () => {
  console.log("Server running on port 5500....");
});

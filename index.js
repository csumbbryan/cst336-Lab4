
const express = require('express');
const fetch = require('node-fetch');

const app = express();

const imgUrl = [
  "/img/solar_system.webp",
  "/img/mercury.jpg",
  "/img/Venus-jpeg.webp",
  "/img/earth.jpg",
  "/img/mars-jpeg.webp",
  "/img/jupiter-marble.webp",
  "/img/Saturn.jpg",
  "/img/Uranus.jpg",
  "/img/Neptune2024latest.webp",
];

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
  let image = imgUrl[0];
  res.render('index', {"title": "The Solar System", "imgUrl": image})
});

app.get('/earth', async (req, res) => {
  let url = 
  "https://api.unsplash.com/photos/random/?client_id=7756a1e81f817c186cf57294e1c19b37b49c54b8f34e7c499ee0ce5cd86cd16e&featured=true&query=planet-earth"
  let response = await fetch(url);
  let image = "";
  if(response.status == 403) {
    image = "";
  } else {
    let data = await response.json();
    image = data.urls.small;
  }
  res.render('earth', {"imgUrl":image, "title":"Earth"})
});

app.get('/mars', (req, res) => {
  let image = imgUrl[4];
  res.render('mars', {"title": "Mars", "imgUrl":image})
});

app.get('/mercury', (req, res) => {
  let image = imgUrl[1];
  res.render('mercury', {"title": "Mercury","imgUrl":image})
});

app.get('/venus', (req, res) => {
  let image = imgUrl[2];
  res.render('venus', {"title": "Venus","imgUrl":image})
});

app.get('/jupiter', (req, res) => {
  let image = imgUrl[5];
  res.render('jupiter', {"title": "Jupiter","imgUrl":image})
});

app.get('/saturn', (req, res) => {
  let image = imgUrl[6];
  res.render('saturn', {"title": "Saturn", "imgUrl":image})
});

app.get('/uranus', (req, res) => {
  let image = imgUrl[7];
  res.render('uranus', {"title": "Uranus", "imgUrl":image})
});

app.get('/neptune', (req, res) => {
  let image = imgUrl[8];
  res.render('neptune', {"title": "Neptune", "imgUrl":image})
});

app.listen(3000, () => {
  console.log('server started');
});

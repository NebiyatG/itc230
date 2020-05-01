'use strict'


const http = require("http");
const movies = require('./data.js');
const express = require("express");
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars"); 


const app = express();


var all = movies.getAll();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.urlencoded({extended: true})); 
app.engine('handlebars', exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");


app.get('/home.html', (request, response) => {
  response.type('text/html');
  response.sendFile(__dirname + '/public/home.html');
});

app.get('/', (request, response) => {
  response.render('home', {movies: all});
});

app.get('/detail', (request, response) => {
  let index = request.query.index;
  let movie = all[index];
  response.render('detail', { index: index, movie: movie });
});


// send plain text response
app.get('/about', (request, response) => {
  response.type('text/plain');
  response.send('About page');
});

app.use( (request,response) => {
  response.type('text/plain'); 
  response.status(404);
  response.send('404 - Not found');
});


app.listen(app.get('port'), () => {
  console.log('Express started'); 
});

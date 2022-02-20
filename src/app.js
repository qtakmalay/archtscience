const express = require('express');
var path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/images')));
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index.html');
});

app.get('/About.html', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.sendFile(__dirname+'/views/About.html');
});

module.exports = app;
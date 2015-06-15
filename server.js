'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var getRandomWord = require('./lib/getRandomWord.js');
var postWord = require('./lib/postWord.js');
var Adjective = require('./lib/adjective.js');
var Verb = require('./lib/verb.js');
var Noun = require('./lib/noun.js');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var adjective = new Adjective();
var verb = new Verb();
var noun = new Noun();

app.post('/adjective', function(req, res) {
  console.log(req.body.word);
  adjective[req.body.word] = true;
  res.json(postWord(req.body.adjective, adjective));
})

app.post('/verb', function(req, res) {
  console.log(req.body.word);
  verb[req.body.word] = true;
  res.json(postWord(req.body.verb, verb));
})

app.post('/noun', function(req, res) {
  console.log(req.body.word);
  noun[req.body.word] = true;
  res.json(postWord(req.body.noun, noun));
})

app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('server starting. available at http://localhost:' + port);
});

'use strict';

$(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    var userAdjective = $('#user-adjective').val();
    $.post('/adjective', {word: userAdjective}, function(response) { //this is json object and a callback function
      var confirm = response.message + " We saved: <em>" + response.confirm + "</em>";
      $('#adjective-res').html(confirm);
    });

    var userVerb = $('#user-verb').val();
    $.post('/verb', {word: userVerb}, function(response) {
      var confirm = response.message + " We saved: <em>" + response.confirm + "</em>";
      $('#verb-res').html(confirm);
    });

    var userNoun = $('#user-noun').val();
    $.post('/noun', {word: userNoun}, function(response) {
      var confirm = response.message + " We saved: <em>" + response.confirm + "</em>";
      $('#noun-res').html(confirm);
    });

  })

  $("button").click(function() {
    $.get('/adjective', function(response) {
      var adjective = response.word;
      $("#adjective").text(adjective);
    });

    $.get('/verb', function(response) {
      var verb = response.word;
      $("#verb").text(verb);
    });

    $.get('/noun', function(response) {
      var noun = response.word;
      $("#noun").text(noun);
    });

  });

});

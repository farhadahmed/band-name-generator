'use strict';

$(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    var userAdjective = $('#user-adjective').val();
    $.post('/adjective', {word: userAdjective}, function() { //this is json object and a callback function
      // Get something back, do something with it!
    })
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

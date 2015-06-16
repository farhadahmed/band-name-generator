'use strict';

module.exports = function(word, wordObject) {
  var msg;
  if (wordObject.hasOwnProperty(word)) {
    msg = "We already have your awesome word: ";
  } else {
    wordObject[word] = true;
    msg = "We saved: ";
  }

  return {message: msg, confirm: word};
};

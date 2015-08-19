$(document).on('ready', function() {
  console.log('sanity check!');
});

var GameLibrary = function(title) {
  this.title = title,
  this.games = []
};

var Game = function(title, genre) {
  this.title = title,
  this.genre = genre
};

Game.prototype.render = function (first_argument) {
  // body...
};

GameLibrary.prototype.render = function () {
  // body...
};

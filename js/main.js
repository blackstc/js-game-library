$(document).on('ready', function() {
  $("#addGame").on("click", function(e) {
    e.preventDefault();
    $title = $("#title").val();
    $genre = $("#genre").val();
    var newGame = new Game($title, $genre);
    newGame.render();
  });
});

var GameLibrary = function(title) {
  this.title = title,
  this.games = [];
};

var Game = function(title, genre) {
  this.title = title,
  this.genre = genre;
};

Game.prototype.render = function () {
  $('form').append("<li>Title: " + this.title + "</li>");
  $('form').append("<li>Genre: " + this.genre + "</li>");
};

GameLibrary.prototype.render = function () {
  // body...
};

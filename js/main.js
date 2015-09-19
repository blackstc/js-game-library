$(document).on('ready', function() {

  $("#addGame").on("click", function(e) {
    e.preventDefault();
    $title = $("#title").val();
    $genre = $("#genre").val();
    var newGame = new Game($title, $genre);
    newGame.render();
  });

  $("#removeGame").on("click", function(e) {
    e.preventDefault();
    $lastGame = $("form").find("div").length - 1;
    $("form").find("div").eq($lastGame).remove();
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
  $('form').append("<div><li>Title: " + this.title + "</li><li></div>");
  $('form').append("<li>Genre: " + this.genre + "</li><br>");
};

GameLibrary.prototype.render = function () {
  // body...
};

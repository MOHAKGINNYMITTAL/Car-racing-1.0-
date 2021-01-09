var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1;
var car2;
var car3;
var car4;
var cars;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth-70,displayHeight-170);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("red");
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}

var game,form,database,player;
var gameState = 0;
var playerCount = 0;
var allPlayers ;

var car1,car2,car3,car4,cars;

function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    console.log(database);

    game=new Game();
    game.getState();
    game.start();
}




function draw(){
    background("white");
    if (playerCount === 4){
        game.updateState(1);
    }
    if (gameState === 1){
        game.play();
    }
    
}


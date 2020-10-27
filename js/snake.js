let score = document.getElementById("points");
let grid = document.getElementById("grid");
let snake = document.getElementById("snake");
let apple = document.getElementById("apple");

// snake.style.gridArea= "1/1";
// snake.style.gridArea= "5/5";


// const SPACE = 32 // Pause the gaem 
// const ESCAPE = 27 // Quit the game

let xrand;
let yrand;
let xdir = 1;
let ydir = 1;
let direction = "right";

let points = 1;

let vitesse = 200;

function randapple() {
    xrand = Math.floor(Math.random() * 20) + 1
    yrand = Math.floor(Math.random() * 20) + 1

    document.getElementById("apple").style.gridArea= xrand+"/"+yrand;
} 

apple = randapple();

function gameOver() {
    alert("le jeu est terminé")
}




setInterval(function(){ 
    eat()
    if(direction === "right"){
        if(ydir === 21){
           // gameOver() 
            ydir = 0
        }
        ydir += 1;
        snake.style.gridArea = xdir + "/" + ydir;
    }
    if(direction === "left"){
        if(ydir === 0){
           // gameOver() 
            ydir=21   
        }
        ydir= ydir- 1
        snake.style.gridArea = xdir + "/" + ydir
    }
    if(direction === "down"){
        if(xdir === 21){
           // gameOver() 
            xdir=0   
        }
        xdir += 1
        snake.style.gridArea = xdir + "/" + ydir
    }
    if(direction === "up"){
        if(xdir === 0){
           // gameOver() 
            xdir=21   
        }
        xdir = xdir - 1
        snake.style.gridArea = xdir + "/" + ydir
    }
}, vitesse);


window.addEventListener("keydown", event => {
    if (event.keyCode === 37 && direction != "right") {
      direction = "left"
    }
    if (event.keyCode === 38 && direction != "down") {
        direction = "up"
    }
    if (event.keyCode === 39 && direction != "left") {
        direction = "right"
    }
    if (event.keyCode === 40 && direction != "up") {
        direction = "down"
    }
});
function eat (){
    if ((xdir == xrand) && (ydir == yrand)) {
        score.innerHTML = points++;
        randapple();
        // vitesse-= 180;
    }
}











// _______________________________________________________________________________________

// const context = canvas.getContext("2d"); //fonctionne pas ?

// let score = 0;
// let s;
// let apple = [10, 10];

// function setup(){
//     document.getElementById("canvas");
//     s = new snake;
// }

// function snake(){
//     this.x = 0;
//     this.y = 0;
//     this.xspeed = 1;
//     this.yspeed = 0;

//     this.update = function(){
//         this.x = this.x + this.xspeed;
//         this.y = this.y + this.yspeed;
//     }
//     this.show= function () {
//         fill (51)
//         rect(this.x, this.y, 30, 30)
//     }
// }

// _______________________________________________________________________________________

// function apple(x,y){
//     let apple = [x, y, unit, unit]
//     let x = Math.floor(Math.random()*601)
// 	let y = Math.floor(Math.random()*601)
//     return apple
// }
// canvas.innerHTML = apple(x,y)
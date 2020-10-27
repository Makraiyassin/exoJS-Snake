let score = document.getElementById("num");
let canvas = document.getElementById("grid");
let snake = document.getElementById("snake");
let apple = document.getElementById("apple");

// const SPACE = 32 // Pause the gaem 
// const ESCAPE = 27 // Quit the game

let xrand;
let yrand;
let xdir = 1
let ydir = 1


function randapple() {
    xrand = Math.floor(Math.random() * 20) + 1
    yrand = Math.floor(Math.random() * 20) + 1

    return document.getElementById("apple").style.gridArea= xrand+"/"+yrand;
} 

apple = randapple();

// console.log(x,y);

//
// function gameOver() {
//     alert("le jeu est terminé")
// }


let direction = "right"

setInterval(function(){ 
    eat(xdir, ydir)
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
}, 200);


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
    // do something (event.isComposing || )
});

// function eat (){
//     if (snake === apple){
//         alert()
//         // let x = 0
//         // score.innerHTML = x+1
//         // randapple()
//     }
// }
// let xx = 2;
// document.getElementById("num").innerHTML = xx;
let i = 1
function eat (){
    if ((xdir == xrand) && (ydir == yrand)) {
        // alert()
        document.getElementById("num").innerHTML = i++;
        randapple();
    }}











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
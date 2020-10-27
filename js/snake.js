let score = document.getElementById("num");
let canvas = document.getElementById("grid");
let snake = document.getElementById("snake");
let apple = document.getElementById("apple");

const SPACE = 32 // Pause the gaem 
const ESCAPE = 27 // Quit the game

// function move() {

// }

function randapple() {
    let x = Math.floor(Math.random() * 20) + 1
    let y = Math.floor(Math.random() * 20) + 1

    return document.getElementById("apple").style.gridArea= x+"/"+y;
} 

apple = randapple();

// console.log(x,y);

//
let x = 1
let y = 1

let direction = "right"

function gameOver() {
    alert("le jeu est terminé")
}


setInterval(function(){ 
    if(direction === "right"){
        if(y === 21){
           // gameOver() 
            y = 0
        }
        y += 1;
        snake.style.gridArea = x + "/" + y;
    }
    if(direction === "left"){
        if(y === -1){
           // gameOver() 
            y=21   
        }
        y = y - 1
        snake.style.gridArea = x + "/" + y
    }
    if(direction === "down"){
        if(x === 21){
           // gameOver() 
            x=0   
        }
        x += 1
        snake.style.gridArea = x + "/" + y
    }
    if(direction === "up"){
        if(x === -1){
           // gameOver() 
            x=21   
        }
        x = x - 1
        snake.style.gridArea = x + "/" + y
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

// (function eat (){
//     if (snake== apple){
//         score++
//         randapple()
//     }
    
// })();











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
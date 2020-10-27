let score = document.getElementById("score");
let canvas = document.getElementById("grid");
let snake = document.getElementById("snake");
let apple = document.getElementById("apple");

const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40;
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
x = 1
y = 1
let direction = "left"

setInterval(function(){ 
    if(direction === "right"){
        if(y === 20){
            engame()    
        }
        y += 1
        snake.style.gridArea = x + "/" + y
    }
    
}, 20);














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
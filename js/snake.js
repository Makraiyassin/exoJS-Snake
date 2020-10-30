let score = document.getElementById("points");
let grid = document.getElementById("grid");
let snake = document.getElementById("snake");
let apple = document.getElementById("apple");

let xrand;
let yrand;

let xdir = 1;
let ydir = 1;

let direction = "right";

let points = 1;

let vitesse = 200;

/* CONTENU DU JEU (AVANCE AUTOMATIQUE + APPEL DES DIFFERENTES FONCTION) */

setInterval(function(){ 
    eat()
    if(direction === "right"){
        if(ydir === 20){                            //Pk pas 21???
           gameOver() 
            // ydir = 1
        }
        ydir += 1;
        snake.style.gridArea = xdir + "/" + ydir;
    }
    if(direction === "left"){
        if(ydir === 1){                             //Pk pas 0 ou -1???
           gameOver() 
            // ydir=20   
        }
        ydir -= 1
        snake.style.gridArea = xdir + "/" + ydir
    }
    if(direction === "down"){
        if(xdir === 20){                            //pk pas 21???
           gameOver() 
            // xdir=1   
        }
        xdir += 1
        snake.style.gridArea = xdir + "/" + ydir
    }
    if(direction === "up"){
        if(xdir === 1){                             //Pk pas 0 ou -1???
           gameOver() 
            // xdir=20   
        }
        xdir -= 1
        snake.style.gridArea = xdir + "/" + ydir
    }
}, vitesse)

/* TOUCHES DIRECTIONS: */

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

/* FONCTION EAT (CE QUI SE PASSE AU MOMENT OU LE SERPENT MANGE UNE POMME) */

function eat (){
    if ((xdir == xrand) && (ydir == yrand)) {
        score.innerHTML = points ++;
        randapple();
        // vitesse= vitesse - 50;
        // let body = document.(creer un élément body).style.gridArea= des paramettre qui vont faire que le body suis le mouvement de la tête (xdir-1+"/"+ydir-1);
    }
}

/*FONCTION SERVANT A FAIRE APPARAITRE LA POMME DANS UNE POSITION "RANDOM"*/

function randapple() {
    xrand = Math.floor(Math.random() * 20) + 1                  // => chiffre aléatoire entre 1 et 20
    yrand = Math.floor(Math.random() * 20) + 1                  // => chiffre aléatoire entre 1 et 20

    document.getElementById("apple").style.gridArea= xrand+"/"+yrand;
} 

apple = randapple();

/*FONCTION GAME OVER (AFFICHE LE SCORE ET RELANCE LE JEU)*/

function gameOver() {
    alert("le jeu est terminé. \nVotre score est: "+ (points-1)) // j'ai mis "-1" car la variable points = 1 au lieu de 0 (pour des raisons d'affichage du score au long de la partie)
    document.location.reload()
}














// _______________________________________________________________________________________

// snake.style.gridArea= "1/1";
// snake.style.gridArea= "5/5";

// const SPACE = 32 // Pause the game 
// const ESCAPE = 27 // Quit the game

// const context = canvas.getContext("2d"); //

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


/*FONCTION VITESSE (POUR L'AUGMENTER A CHAQUE FOIS QU'UNE POMME EST MANGER)  => NE FONCTIONNE PAS...*/

// function vit() {
//     if ((xdir == xrand) && (ydir == yrand)) {
//         vitesse=vitesse-50;
//      }
// }
// vitesse=vit();

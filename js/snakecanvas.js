
const score = document.getElementById("points");

const canvas= document.querySelector("#canvas");
const contexte= canvas.getContext('2d');

let apple = new Image();  
apple.src = 'images/JS6.png';

let speed = 200;
let points = 1;

const grid= 30;

const snake= {

    tete:{
        largeur: grid,
        hauteur: grid,
    },

    position:{
        x:canvas.width/2,
        y:canvas.height/2
    },

    deplacement:{
        x:0,
        y:0
    }, 
    
    corps:[],

    taille:1,

    afficher:()=>{
        contexte.clearRect(0,0,canvas.width,canvas.height);
        contexte.fillStyle="red";
        
        for(let index of snake.corps){
            contexte.fillRect(index.x, index.y, snake.tete.largeur-2,snake.tete.hauteur-2);
        }
    },

    deplacer:()=>{
        snake.position.x+=snake.deplacement.x*snake.tete.largeur;
        snake.position.y+=snake.deplacement.y*snake.tete.hauteur;

        let coordonees={
            x:snake.position.x,
            y:snake.position.y,
        };

        snake.corps.push(coordonees);

        while(snake.corps.length>snake.taille){
            snake.corps.shift();
        };
    },

    grandir:()=>{
        snake.taille++;
    },
};

const pomme= {

    dimension:{
        rayon: grid/2,
    },

    afficher:()=>{
        
        contexte.beginPath();
        contexte.drawImage(apple,pomme.position.x,pomme.position.y);
        // contexte.arc(pomme.position.x+pomme.dimension.rayon,pomme.position.y+pomme.dimension.rayon,pomme.dimension.rayon,0,Math.PI*2);
        // contexte.fillStyle= "green";
        // contexte.fill();
        contexte.closePath(); 
    },
 
    position:{
        x:(Math.floor(Math.random()*(canvas.width/grid))*grid),
        y:(Math.floor(Math.random()*(canvas.height/grid))*grid),
    },

    initialiser:()=>{
        pomme.position.x=(Math.floor(Math.random()*(canvas.width/grid))*grid);
        pomme.position.y=(Math.floor(Math.random()*(canvas.height/grid))*grid);
    }

}

const reinitialiser=()=>{
    snake.taille=1;
    snake.position.x=canvas.width/2;
    snake.position.y=canvas.height/2;
    snake.deplacement.x=0;
    snake.deplacement.y=0;
    snake.corps=[];
    speed=200;
    points=1;
    score.innerHTML = 0;

    if(gameStarted===false){
        game(); 
    }
    // document.location.reload()
}

function game (){

    gameStarted=true;

    if(snake.position.x >= canvas.width || snake.position.y >= canvas.height || snake.position.x < 0 || snake.position.y < 0){
        alert("le jeu est terminé. \nVotre score est: "+ (points-1)) ;       
        gameStarted=false;
        reinitialiser();

        return;
    };

    snake.afficher();

    snake.deplacer();

    pomme.afficher();

    if(snake.position.x === pomme.position.x && snake.position.y === pomme.position.y){
        pomme.initialiser();
        snake.grandir();
        score.innerHTML = points ++;

        if(speed>=100){
            speed-=10;
        }else if(speed>=50) {
            speed-=5        
        }
        
    }
    setTimeout(game,speed);
}

game()

const clavier=(touche)=>{
    
    switch(touche.key){

        case "ArrowRight":
            if(snake.deplacement.x===-1){break;}
            snake.deplacement.x=1;
            snake.deplacement.y=0;
            break;
        case "ArrowLeft":
            if(snake.deplacement.x===1){break;}
            snake.deplacement.x=-1;
            snake.deplacement.y=0;
            break;
        case "ArrowUp":
            if(snake.deplacement.y===1){break;}
            snake.deplacement.x=0;
            snake.deplacement.y=-1;
            break;
        case "ArrowDown":
            if(snake.deplacement.y===-1){break;}
            snake.deplacement.x=0;
            snake.deplacement.y=1;
            break;

        case "Enter": reinitialiser();
            break;

        case " ":
            snake.deplacement.x=0;
            snake.deplacement.y=0;
            break;
    }

};

window.addEventListener("keydown",clavier);

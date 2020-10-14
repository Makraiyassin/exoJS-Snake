# js-game-jam-team-5

## Pseudo code pour le jeux : “Snake”

### Intro : 

Nous voulons créez un jeu “Snake”.
Nous sommes une bonne équipe de quatre, qui se compose de Charlotte, Yassin, Abod et Gianluca.
Nous allons créer un carré, où un serpent sera à l’intérieur. 

### Le BUT :

=> Il doit manger le plus de “apple” possible. Plus il mange de pommes, plus il s’allonge en <height>.  Si il touche le bord du carré, il meurt et la partie se lance à nouveau.

### VARIABLES :

Le serpent est déclaré dans une variable sous le nom de : let snake
La pomme sera déclaré sous la variable : let apple
La tête du serpent doit s'ouvrir et se fermer sans s'arrêter pendant que le jeu est activé
Le direction du serpent sous les variables: 
let right (key_right=39)
let left (key_left=37)
let up (key_up=38)
let down (key_down=40)
=> Le serpent se déplace dans le carré défini par une div, sous le nom de : div carré
Variable : GAME OVER
Variable : TRY AGAIN 
-let over (LIRE “ Game over”)
-let again ( LIRE “Try again :) ” avec un bouton )


### ALGO :

Le serpent qui avance dans le carré avec les directions ( let right/ let left/ let up/ let down )

L’apparition de la pomme aléatoirement dans le carré : AFFICHER apple SI apple est active ALORS apple s’affiche ALÉATOIREMENT (random)  
apple = Math.floor (Math.random () * .length)]

Dès que le serpent touche le border il meurt (afficher un GAME OVER et un TRY AGAIN) : 
Dès que le serpent touche son propre corps il meurt (afficher un GAME OVER et un TRY AGAIN) :

Le serpent qui s’allonge dès qu’il mange une pomme :  AFFICHER snake SI snake mange une apple ALORS snake s’allonge à l’INFINIE 


### Html :

Nous aurons un carré de 600px sur 600px avec une bordure solid autour de 5px
<canvas id="canvas" width="600" height="600"></canvas>

Set them to numeric values in JavaScript code to resize your canvas
var canvas = document.getElementsByTagName('canvas')[0]; 
canvas.width = 600;
canvas.height = 600;


### CSS : 

### Js :   

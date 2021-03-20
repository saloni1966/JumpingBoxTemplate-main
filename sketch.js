var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    s1 = createSprite(80,580,200,20);
    s1.shapeColor = 'blue';
    s2 = createSprite(300,580,200,20);
    s2.shapeColor = 'orange';



    //create box sprite and give velocity

    box = createSprite(random(20,750),-10,30,30);
    box.velocityX = 5;
    box.velocityY = -8;

}

function draw() {
    background(rgb(169,169,169));

    if(box.isTouching(s1) && box.bounceOff(s1)){
        box.shapeColor= 'blue'
       }
    if(box.isTouching(s2) && box.bounceOff(s2)){
        box.shapeColor= 'orange'
       }
    //create edgeSprite
    edges= createEdgeSprites();
   box.bounceOff(edges);
   box.bounceOff(s1);

   

   drawSprites();
    //add condition to check if box touching surface and make it box
}

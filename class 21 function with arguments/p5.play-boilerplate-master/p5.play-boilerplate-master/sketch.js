var fixedRect,movingRect  
var dog,cat

function setup() {
  createCanvas(800,400);
fixedRect= createSprite(400, 200, 50, 50);
movingRect=createSprite(400, 200, 50, 50);
dog=createSprite(300,30,33,33);
cat=createSprite(332,333,33,33);
fixedRect.shapeColor=("green");
movingRect.shapeColor=("green");
dog.shapeColor=("green");
cat.shapeColor=("green");
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(istouching(movingRect,fixedRect)    ){
    
    fixedRect.shapeColor=("red");
movingRect.shapeColor=("red");

  }
  else if(istouching(movingRect,dog)) {

    movingRect.shapeColor=("red")
    dog.shapeColor=("red")
  }
  else if(istouching(movingRect,cat)){
    movingRect.shapeColor=("red")
    cat.shapeColor="red"
  }
  else{
    dog.shapeColor=("green");
    cat.shapeColor=("green");
    fixedRect.shapeColor=("green");
movingRect.shapeColor=("green");
  }
  drawSprites();

}
function istouching (object1,object2){
  if(object1.x-object2.x<=object1.width/2+object2.width/2
    &&object2.x-object1.x<=object1.width/2+object2.width/2
    &&object1.y-object2.y<=object1.height/2+object2.height/2
    &&object2.y-object1.y<=object1.height/2+object2.height/2

    ){
 return true
    }

else {
  return false
} 

  }
     
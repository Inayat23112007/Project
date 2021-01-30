function setup() {
  createCanvas(800,400);
  sqaure=createSprite(400, 200, 50, 50);
  sqaure.shapeColor="pink"
  rectangle=createSprite(200,400,50,100)
  rectangle.shapeColor="lightblue"
}

function draw() {
  background(0);  
  drawSprites();
  rectangle.x=mouseX
  rectangle.y=mouseY

  if (rectangle.isTouching(sqaure)){
    rectangle.shapeColor="pink"
    sqaure.shapeColor="lightblue"
  }
  else{
    sqaure.shapeColor="pink"
    rectangle.shapeColor="lightblue"
  }
}
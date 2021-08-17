class PlayerArcher{

 constructor(x, y, width, height,archerAngle) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.archerAngle=archerAngle;
    this.image = loadImage("./assets/playerArcher.png");

    World.add(world, this.body);
  }

  shoot(){
    
  var velocity=p5.Vector.fromAngle(archerAngle)
      
  velocity.mult(20);

  Matter.Body.setStatic(this.body,false);
      
  Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y});
  }

   display() {
  Matter.body.setAngle(this.body,-PI/2)  

  if (move==="UP"&&computerArcher.body.angle<1.77){
    angleValue=0.1;
   }else{
   angleValue=-0.1;    
   }

   if (move==="DOWN"&&computerArcher.body.angle<1.47){
   angleValue=-0.1;
  }else{
  angleValue=0.1;    
   }
  
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}






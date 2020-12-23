class Umbrella {
    constructor(x, y) {
      var options = {
        isStatic:true
    }
    this.image = loadImage("walking_5.png");
    this.umbrella = Bodies.circle(x, y, 50,options);
    this.r = 50;
    World.add(world, this.umbrella);
    }
    display(){
      var pos =this.umbrella.position;
     imageMode(CENTER);
     image(this.image,pos.x,pos.y+70,300,300);
    }
  };
class Snow{
    constructor(x,y){
var options={
    'friction':0.6,
    'density':0.9
}

this.body=Bodies.circle(x,y,20,options);
this.x=x;
this.y=y;
this.r=20;
this.image=loadImage("snow5.webp");
World.add(world,this.body);
    }
display(){
    imageMode (CENTER);
    image(this.image,0,0,20,20);
}
}
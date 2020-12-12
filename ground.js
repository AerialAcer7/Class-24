class Ground {
  constructor(x,y,w,h){
  var option = {
    isStatic: true  
  }
  
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  
    this.body = Bodies.rectangle(x,y,w,h,option);
    World.add(world,this.body);
  }

  display(){
   var pos = this.body.position; 
   
   rectMode(CENTER);
   rect(pos.x,pos.y,this.width,this.height);   
  }
    


}
class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetX,y:this.offsetY}
        }
     this.rope=Constraint.create(options);
     World.add(world,this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        push();
        var ancher1x=pointA.x;
        var ancher1y=pointA.y;
        var ancher2x=pointB.x+this.offsetX;
        var ancher2y=pointB.y+this.offsetY;
        line(ancher1x,ancher1y,ancher2x,ancher2y);
        pop();
    }
}

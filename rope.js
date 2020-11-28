class Rope{
    constructor(body1, body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            body1: body1,
            body2: body2,
            stiffness: 0.04,
            length: 10
            
        }
        this.rope = Constraint.create(options);
        pointB = {x:this.offsetX , y:this.offsetY}
        World.add(world, this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}
class PlayerArcher {

    constructor(x, y, width, height, angle){

        this.image = loadImage("./assets/playerArcher.png");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.body = Bodies.rectangle(x, y, width, height);
        World.add(world, this.body);
    }

    display() {

        if (keyIsDown(UP_ARROW) && this.angle > 0.5){
            this.angle += 0.2;
        }

        if (keyIsDown(DOWN_ARROW) && this.angle < 1.5){
            this.angle -= 0.2;
        }

        push()
        translate(this.x, this.y);
        rotate(angle);
        imageMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();


    }


}
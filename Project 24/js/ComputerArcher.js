class ComputerArcher {

    constructor(x, y, width, height, angle){

        this.image = loadImage("./assets/computerArcher.png");
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.angle = angle;
        this.body = Bodies.rectangle(x, y, width, height);
        World.add(world, this.body);
    }

    display() {

        push()
        translate(this.x, this.y);
        rotate(angle);
        imageMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();


    }


}
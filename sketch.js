//declare variables
// let blueLeft;
// let blueRight;
// let blueTop;
// let blueBottom;
// let redLeft;
// let redRight;
// let redTop;
// let redBottom;


// Declare Variables 
let User1PosX = 545;
let User1PosY = 175;
let User2PosX = 105;
let User2PosY = 175;
let mySpeed = 7;
let PuckPosX = 330;
let PuckPosY = 180;
let puckSpeed = 9;
let puckMove = false;
//define player1 (red guy) edges
P1Left = User1PosX;
P1Right = User1PosX + 40;
P1Top = User1PosY;
P1Bottom = User1PosY + 70;
    
//define player2 (blue guy) edges
P2Left = User2PosX;
P2Right = User2PosX + 40;
P2Top = User2PosY;
P2Bottom = User2PosY + 70;

//define puck edges
PuckLeft = PuckPosX;
PuckRight = PuckPosX + 20;
PuckTop = PuckPosY;
PuckBottom = PuckPosY + 20;

function setup() {
    createCanvas(700,400);
    background(0);

    //making the field
    //upper roof left portion
    fill(255,71,71);
    rect(0,0,700,25);
    //lower bottom left portion
    fill(3,184,0);
    rect(0,400,700,-25);
    //left wall portion
    fill(0,255,255);
    // rect(0,25,25,350);
    //left upper wall
    rect(0,25,25,125);
    //left lower wall
    rect(0,250,25,150);
    //right wall portion
    fill(255,153,43);
    // rect(675,25,25,350);
    //right upper wall
    rect(675,25,25,125);
    //right lower wall
    rect(675,250,25,150);
    //player 1
    fill(0,0,255);
    rect(115,200,30,70);
    //player 2
    fill(255,0,0);
    rect(595,200,30,70);
    //puck
    fill(255,251,0);
    rect(190,340,10,10);

}

function draw () {
    background(0);
    //making the field
    //upper roof left portion
    fill(255,71,71);
    rect(0,0,700,25);
    //lower bottom left portion
    fill(3,184,0);
    rect(0,400,700,-25);
    //left wall portion
    fill(0,255,255);
    // rect(0,25,25,350);
    //left upper wall
    rect(0,25,25,125);
    //left lower wall
    rect(0,250,25,150);
    //right wall portion
    fill(255,153,43);
    // rect(675,25,25,350);
    //right upper wall
    rect(675,25,25,125);
    //right lower wall
    rect(675,250,25,150);
    //entities/ moving parts
    fill(255,0,0);
    rect(User1PosX,User1PosY,40,70);
    fill(0,0,255);
    rect(User2PosX,User2PosY,40,70);
    fill(255,251,0);
    rect(PuckPosX,PuckPosY,20,20);
    // player 1 movement
    if (keyIsDown(LEFT_ARROW) && User1PosX > width/2) {
        User1PosX -= mySpeed;
        console.log(User1PosX);
    }

    if (keyIsDown(RIGHT_ARROW) && User1PosX < width -25) {
        User1PosX += mySpeed;
    }

    if (keyIsDown(UP_ARROW) && User1PosY > height - 375) {
        User1PosY -= mySpeed;
    }

    if (keyIsDown(DOWN_ARROW) && User1PosY < height - 25) {
        User1PosY += mySpeed;
    }
    //player 2 movement
    if (keyIsDown(87) && User2PosY > 375) { //w
        User2PosY -= mySpeed
    }
    if (keyIsDown(65) && User2PosX < width - 675) { //a
        User2PosX -= mySpeed;
    }
    if (keyIsDown(68) && User2PosX > width/2) { //d
        User2PosX += mySpeed;
    }
    if (keyIsDown(83) && User2PosY < height - 25) { //s
        User2PosY += mySpeed;
    }

    if (puckMove == true) {
        PuckPosX += puckSpeed;
        PuckPosY += random(0,1);
    }
    // non-collision for player 1
    if(P1Left > PuckRight || P1Right < PuckLeft || P1Top > PuckBottom || P1Bottom < PuckTop) {
         //does nothing
    }
    else{
        puckSpeed * -1;
    }
    // non-collision for player 2
    if(P2Left > PuckRight || P2Right < PuckLeft || P2Top > PuckBottom || P2Bottom < PuckTop) {
        //does nothing
    }
    else{
       puckSpeed *= -1;
    }
    
    // // when someone gets a goal
    // if(PuckLeft > GoalForP1 || PuckRight < GoalForP2) {
    //     //does nothing
    // }
    // else{
    //     text('SCORE!!',255,480);
    //     background(0);
    //     fill(255,0,0);
    //     points++;
    //     enemyPosX = 330;
    //     enemyPosY = 180;
   // }
}


function mouseClicked() {
    puckMove = true;
}
// control z point
//










































































// //declaring variable
// let circlesArray = [];
// let circle;

// function setup() {
//     createCanvas(500,500);
//     background(0);

//     // circle = new Circle(250,250,255,0,0);
// }

// function draw() {
//     // fill(circle.r,circle.g,circle.b);
//     // ellipse(circle.x,circle.y,200,200);
//     background(0);
//     for (let i = 0; i < circlesArray.length; i++) {
//         fill(circlesArray[i].r, circlesArray[i].g, circlesArray[i].b, circlesArray[i].opacity);
//         ellipse(circlesArray[i].x, circlesArray[i].y, 25, 25);
//         //have the circles jitter independantly
//         circlesArray[i].x += random(-3,3);
//         circlesArray[i].y += random(-3,3);
//         // decrease opacity independantly
//         circlesArray[i].opacity -= random(0,2);
//     }
// }
// function mouseClicked() {
//     circle = new Circle(mouseX,mouseY,random(255),random(255),random(255));
//     circlesArray.push(circle);
// }

// class Circle {
//     constructor(x,y,r,g,b) {
//         //assign to the object
//         this.x = x;
//         this.y = y;
//         this.r = r;
//         this.g = g;
//         this.b = b;
//         this.opacity = 255;
//     }
// }
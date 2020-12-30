var ball;
var database,position

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    var ballPositionref=database.ref("ball/position");
    ballPositionref.on("value",readPosition,showError);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if (position){
    if(keyDown("a")){
        writePosition(-4,0);
    }
    else if(keyDown("d")){
        writePosition(4,0);
    }
    else if(keyDown("w")){
        writePosition(0,-4);
    }
    else if(keyDown("s")){
        writePosition(0,+4);
    }
    drawSprites();
}
}

function changePosition(x,y)
{
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data)
{
position=data.val();
console.log(position);
ball.x=position.x;
ball.y=position.y;
}

function showError()
{
console.log("error")

}

function writePosition(x,y) 
{
database.ref("ball/position").set({
    x:position.x+x,
    y:position.y+y,
});


}
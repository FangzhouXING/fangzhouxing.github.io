// math.js testing
var n = math.matrix([[4,3,2], [6,6,8], [7,4,5]]);   
console.log(n);
console.log(math.chain(3).add(4).multiply(2).done());

const debug = false;

var W = 400;
var H = 300;

var Canvas = document.getElementById("RTScene");
var Context = Canvas.getContext("2d");
var CanvasImage = Context.getImageData(0, 0, W, H);

var start = null;

var counter = 0;
var txt = document.getElementById('Testingtext');

window.requestAnimationFrame(FPS_step);

var spheres = null;

startRender();
UpdateWorld();
Render();
finishRender();

//Graphical object
class GObject {
    constructor(Position, Speed) {
        this.pos = Position;
        this.speed = Speed;
    }

}

class Sphere {

}

//UpdateWorld updates physics. 
function UpdateWorld() {

}

function FPS_step(timestamp) {
    if (!start) {
        start = timestamp;
        txt.innerHTML = "FPS: 0";
    }
    RenderFrame(timestamp);
    counter++;
    var progress = timestamp - start;
    if(progress > 1000) {
        txt.innerHTML = "FPS: " + counter;
        start = timestamp;
        counter = 0;
    }
    window.requestAnimationFrame(FPS_step);
}

function RenderFrame(timestamp)
{

}

function startRender() {
    CanvasImage = Context.getImageData(0, 0, W, H);
}

function finishRender() {
    Context.putImageData(CanvasImage, 0, 0);
}

function setPixel(x, y, Color)
{
    const pixels = CanvasImage.data;
    var offset = (y * W + x) * 4;
    if(debug) {
        console.log("Hello.")
        console.log(Color[0]);
        console.log(Color[1]);
        console.log(Color[2]);
        console.log(Color[3]);
    }
    pixels[offset] = Color[0];
    pixels[offset+1] = Color[1];
    pixels[offset+2] = Color[2];
    pixels[offset+3] = Color[3];
    //Context.putImageData(CanvasImage, 0, 0);
}

function drawCircle(x, y, d, Color) {
    var centerX = x;
    var centerY = y;
    for(var i = 0; i < W; i++) {
        for(var j = 0; j < H; j++) {
            var dist = ((i-centerX)*(i-centerX) + (j-centerY)*(j-centerY));
            if(dist < d*d) {
                setPixel(i, j, Color);
            }
        }
    }
}

function drawOuterLine(Color) {
    for(var i = 0; i < W; i++) {
        setPixel(i, 0, Color);
        setPixel(i, H-1, Color);
    }
    for(var j = 0; j < H; j++) {
        setPixel(0, j, Color);
        setPixel(W-1, j, Color);
    }
}

function Render() {
    drawOuterLine([0,0,0,255]);
    drawCircle(200,100, 50, [128, 0, 128, 255]);
    drawCircle(100, 200, 25, [200, 200, 0, 255]);
}
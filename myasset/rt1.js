const debug = false;

var W = 400;
var H = 300;

var Canvas = document.getElementById("RTScene");
var Context = Canvas.getContext("2d");
var CanvasImage = Context.getImageData(0, 0, W, H);

startRender();
Render();
finishRender();

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
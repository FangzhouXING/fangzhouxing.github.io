var Board_state;
var Canvas;

var Shapes;

var X; //current X
var Y; //current Y
var needNewPiece; // do we need to generate a new piece
var curShape;

function TestMain() {
    console.info("Hello");
}

function TetrisMain() {
    initCanvas();
    game();
}

function game() {

    initShapes();
    initBoard();
    keybinding();
    //start the game
    needNewPiece = true;
    startGame();

}

function startGame() {
    tick();
    clearCanvas();
    drawCanvas();
    window.setTimeout(startGame, 1000);
}

// [min, max)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function tick() {
    if (needNewPiece) {
        // generate new piece and done
        X = 3;
        Y = 0;
        curShape = Shapes[getRandomInt(0, Shapes.length)];
        needNewPiece = false;
        return;
    }

    //fall down and check Collision
    if(validateBoardAndShape(Board_state, curShape, Y+1, X)) {
        Y++;
    }
    else {
        setBoardWithShape(Board_state, curShape, Y, X);
        eliminateFilledRow();
        if(gameFinished()) {
            game();
        }
        needNewPiece = true;
        tick();
    }
}

function gameFinished() {
    for(i = 0; i < 4; i++) {
        for(j = 0; j < 10; j++) {
            if(Board_state[i][j] != 0)
                return true;
        }
    }
    return false;
}

function eliminateFilledRow() {
    board_B = genBoard();
    var cnt = 23;
    for(i = 23; i >= 0; i--) {
        var filled = true;
        var empty = true;
        for(j = 0; j < 10; j++) {
            if(Board_state[i][j] == 0) {
                filled = false;
            }
            else {
                empty = false;
            }
        }

        if(!filled && !empty) {
            for(j = 0; j < 10; j++) {
                board_B[cnt][j] = Board_state[i][j];
            }
            cnt--;
        }
    }
    Board_state = board_B;
}

function setBoardWithShape(Board_state, Shape, y, x) {
    for(i = 0; i < 4; i++) {
        for(j = 0; j < 4; j++) {
            if(x+j >= 0 && x+j < 10 && y+i < 24) {
                if(Shape[i][j] != 0)
                    Board_state[y+i][x+j] = 1;
            }
        }
    }
}

function validateBoardAndShape(Board_state, Shape, y, x) {
    //make sure Shape is not out of bound
    for(i = 0; i < 4; i++) { //row
        for(j = 0; j < 4; j++) { //col
            if((x+j < 0 || x + j >= 10 || y+i >= 24) && Shape[i][j] != 0) {
                return false;
            }
        }
    }

    //make sure Shape is not coliding
    for(i = 0; i < 4; i++) {
        for(j = 0; j < 4; j++) {
            if(x+j >= 0 && x+j < 10 && y+i < 24) {
                if(Board_state[y+i][x+j] != 0 && Shape[i][j] != 0)
                    return false;
            }
        }
    }
    return true;
}

function initCanvas() {
    var c = document.getElementById("RightCanvas");
    var ctx=c.getContext("2d");
    ctx.fillStyle = "#4F5F6F";
    Canvas = ctx;
}

function genBoard() {
    var board = [];
    for(i = 0; i < 24; i++) {
        var row = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        board.push(row.slice(0));
    }
    return board;
}

function initBoard() {
    Board_state = genBoard();
}


function clearCanvas() {
   Canvas.clearRect(0, 0, 300, 600);
}

function drawCanvas() {
    for(i = 4; i < 24; i++) {
        for(j = 0; j < 10; j++) {
            if(Board_state[i][j] != 0) {
                Canvas.fillRect(j*30, (i-4)*30, 30, 30);
            }
        }
    }
    
    for(i = 0; i < 4; i++) {
        for(j = 0; j < 4; j++) {
            if(X+j >= 0 && X+j < 10 && Y+i >=4 && Y+i < 24) {
                if(curShape[i][j] != 0)
                    Canvas.fillRect((X+j)*30, (Y+i-4)*30, 30, 30);
            }
        }
    }
    
}

function redrawCanvas() {
    clearCanvas();
    drawCanvas();
}

function initShapes() {
    // 7 basic Shapes * rotation.
    var lineShape   = [ [0,0,0,0],
                        [1,1,1,1],
                        [0,0,0,0],
                        [0,0,0,0]];
    
    var lineShape90 = [ [0,1,0,0],
                        [0,1,0,0],
                        [0,1,0,0],
                        [0,1,0,0]];
    
    var lShape      = [ [0,1,0,0],
                        [0,1,0,0],
                        [0,1,1,0],
                        [0,0,0,0]];
    var lShape90    = [ [0,0,0,0],
                        [1,1,1,0],
                        [1,0,0,0],
                        [0,0,0,0]];
    var lShape180   = [ [1,1,0,0],
                        [0,1,0,0],
                        [0,1,0,0],
                        [0,0,0,0]];
    var lShape270   = [ [0,0,1,0],
                        [1,1,1,0],
                        [0,0,0,0],
                        [0,0,0,0]];
        
    var rlShape     = [ [0,1,0,0],
                        [0,1,0,0],
                        [1,1,0,0],
                        [0,0,0,0]];
    var rlShape90   = [ [1,0,0,0],
                        [1,1,1,0],
                        [0,0,0,0],
                        [0,0,0,0]];
    var rlShape180  = [ [0,1,1,0],
                        [0,1,0,0],
                        [0,1,0,0],
                        [0,0,0,0]];
    var rlShape270  = [ [0,0,0,0],
                        [1,1,1,0],
                        [0,0,1,0],
                        [0,0,0,0]];
    
    var squareShape = [ [1,1,0,0],
                        [1,1,0,0],
                        [0,0,0,0],
                        [0,0,0,0]];
    
    var zShape      = [ [1,1,0,0],
                        [0,1,1,0],
                        [0,0,0,0],
                        [0,0,0,0]];
    var zShape90    = [ [0,1,0,0],
                        [1,1,0,0],
                        [1,0,0,0],
                        [0,0,0,0]];
    var rzShape     = [ [0,1,1,0],
                        [1,1,0,0],
                        [0,0,0,0],
                        [0,0,0,0]];
    var rzShape90   = [ [1,0,0,0],
                        [1,1,0,0],
                        [0,1,0,0],
                        [0,0,0,0]];
    var tShape      = [ [1,1,1,0],
                        [0,1,0,0],
                        [0,0,0,0],
                        [0,0,0,0]];
    var tShape90    = [ [0,1,0,0],
                        [1,1,0,0],
                        [0,1,0,0],
                        [0,0,0,0]];
    var tShape180   = [ [0,1,0,0],
                        [1,1,1,0],
                        [0,0,0,0],
                        [0,0,0,0]];
    var tShape270   = [ [0,1,0,0],
                        [0,1,1,0],
                        [0,1,0,0],
                        [0,0,0,0]];

    Shapes  = [ lineShape, lineShape90, 
                lShape, lShape90, lShape180, lShape270, 
                rlShape, rlShape90, rlShape180, rlShape270, 
                squareShape, 
                zShape, zShape90, 
                rzShape, rzShape90, 
                tShape, tShape90, tShape180, tShape270];   
}

function getNextShape(shape1) {
    switch(shape1) {
        case Shapes[0]:
            return Shapes[1];
        case Shapes[1]:
            return Shapes[0];
        
        case Shapes[2]: //lShape
            return Shapes[3];
        case Shapes[3]:
            return Shapes[4];
        case Shapes[4]:
            return Shapes[5];
        case Shapes[5]:
            return Shapes[2];
        
        case Shapes[6]:
            return Shapes[7];
        case Shapes[7]:
            return Shapes[8];
        case Shapes[8]:
            return Shapes[9];
        case Shapes[9]:
            return Shapes[6];
        
        case Shapes[10]:
            return Shapes[10];
        
        case Shapes[11]:
            return Shapes[12];
        case Shapes[12]:
            return Shapes[11];
        
        case Shapes[13]:
            return Shapes[14];
        case Shapes[14]:
            return Shapes[13];
        
        case Shapes[15]:
            return Shapes[16];
        case Shapes[16]:
            return Shapes[17];
        case Shapes[17]:
            return Shapes[18];
        case Shapes[18]:
            return Shapes[15];
    }   

}

function findLowestLocation(Board_state, shape, y, x) {
    while(validateBoardAndShape(Board_state, curShape, y+1, x))
        y++;
    return y;
}

function processInput(key) {
    switch (key) {
        case "s":
        case "S":
            Y = findLowestLocation(Board_state, curShape, Y, X);
            redrawCanvas();
            tick();
        break;

        case "w":
        case "W":
            if(validateBoardAndShape(Board_state, getNextShape(curShape), Y, X)) {
                curShape = getNextShape(curShape);
                redrawCanvas();
            }
        break;

        case "a":
        case "A":
            if(validateBoardAndShape(Board_state, curShape, Y, X-1)) {
                X--;
                redrawCanvas();
            }
        break;

        case "d":
        case "D":
            if(validateBoardAndShape(Board_state, curShape, Y, X+1)) {
                X++;
                redrawCanvas();
            }
        break;
        
        default:
            return; // Quit when this doesn't handle the key event.
    }
}



function keybinding() {
    window.addEventListener("keydown", 
        function (event) {
            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }
            processInput(event.key);
            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        }
        , true);

}
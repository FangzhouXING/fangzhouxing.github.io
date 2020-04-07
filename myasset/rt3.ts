//Testing
MatrixTest();

function getInput() : string
{
    var input :any = document.getElementById("inputmatrix");
    console.log("input:", input.value);
    return input.value
}

function Compute() 
{
    console.log("Compute executed.");
    var content = Array<number>(16);
    var input = getInput();
    var inputStrs = input.split(",");
    console.log(inputStrs);
    try {
        for(var i = 0; i < 16; i++) {
            content[i] = parseFloat(inputStrs[i]);
        }
    } catch (error) {
        SetMatrixErrors();
    }

    var m = new Matrix(content);
    
    var trans = m.Transpose();
    SetTranspose(trans);

    try {
        var Inv = m.Inversion();
        SetInverision(Inv);
    } catch (error) {
        SetInversionError();
    }
}

function SetTranspose(t : Matrix)
{
    var trans : any = document.getElementById("transpose");
    var outStr : string = "";
    for(var i = 0; i < 4; i++) {
        for(var j = 0; j < 4; j++) {
            outStr += t.At(i, j) + "\t";
        }
        if(i != 3)
            outStr += "\n";
    }
    trans.innerHTML = outStr;
}

function SetInverision(t : Matrix)
{
    var inv : any = document.getElementById("inversion");
    var outStr : string = "";
    for(var i = 0; i < 4; i++) {
        for(var j = 0; j < 4; j++) {
            outStr += t.At(i, j).toFixed(4) + "\t";
        }
        if(i != 3)
            outStr += "\n";
    }
    inv.innerHTML = outStr;
}

function SetMatrixErrors() 
{
    var trans : any = document.getElementById("transpose");
    var inv : any = document.getElementById("inversion");
    trans.innerHTML = "Error.";
    inv.innerHTML = "Error.";
}

function SetInversionError()
{
    var inv : any = document.getElementById("inversion");
    inv.innerHTML = "No inversion.";
}
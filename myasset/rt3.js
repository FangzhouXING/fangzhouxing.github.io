class RT3 extends RTAnimation {
    prepare() {
    }
}
function DrawLine(p1, p2) {
}
//Testing
//MatrixTest();
function getInput() {
    var input = document.getElementById("inputmatrix");
    console.log("input:", input.value);
    return input.value;
}
function Compute() {
    console.log("Compute executed.");
    var content = Array(16);
    var input = getInput();
    var inputStrs = input.split(",");
    console.log(inputStrs);
    try {
        for (var i = 0; i < 16; i++) {
            content[i] = parseFloat(inputStrs[i]);
        }
    }
    catch (error) {
        SetMatrixErrors();
    }
    var m = new Matrix(content);
    var trans = m.Transpose();
    SetTranspose(trans);
    try {
        var Inv = m.Inversion();
        SetInverision(Inv);
    }
    catch (error) {
        SetInversionError();
    }
}
function SetTranspose(t) {
    var trans = document.getElementById("transpose");
    var outStr = "";
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            outStr += t.At(i, j) + "\t";
        }
        if (i != 3)
            outStr += "\n";
    }
    trans.innerHTML = outStr;
}
function SetInverision(t) {
    var inv = document.getElementById("inversion");
    var outStr = "";
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            outStr += t.At(i, j).toFixed(4) + "\t";
        }
        if (i != 3)
            outStr += "\n";
    }
    inv.innerHTML = outStr;
}
function SetMatrixErrors() {
    var trans = document.getElementById("transpose");
    var inv = document.getElementById("inversion");
    trans.innerHTML = "Error.";
    inv.innerHTML = "Error.";
}
function SetInversionError() {
    var inv = document.getElementById("inversion");
    inv.innerHTML = "No inversion.";
}

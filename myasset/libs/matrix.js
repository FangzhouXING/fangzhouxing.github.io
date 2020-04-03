class Matrix {
    constructor(nums) {
        if (nums.length != 16)
            throw "Matrix requires exactly 16 numbers.";
        this.mNumber = Object.assign([], nums);
    }
    At(i, j) {
        return this.mNumber[i * 4 + j];
    }
    Equal(mb) {
        for (var i = 0; i < this.mNumber.length; i++) {
            if (this.floatEqual(this.mNumber[i], mb.mNumber[i]) == false) {
                return false;
            }
        }
        return true;
    }
    Mul(mb) {
        var content = Array(16);
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                var cur = this.At(i, 0) * mb.At(0, j) + this.At(i, 1) * mb.At(1, j) + this.At(i, 2) * mb.At(2, j) + this.At(i, 3) * mb.At(3, j);
                content[i * 4 + j] = cur;
            }
        }
        return new Matrix(content);
    }
    MulTuple(t) {
        var content = Array(4);
        for (var i = 0; i < 4; i++) {
            var cur = this.At(i, 0) * t.x + this.At(i, 1) * t.y + this.At(i, 2) * t.z + this.At(i, 3) * t.w;
            content[i] = cur;
        }
        return new Tuple(content[0], content[1], content[2], content[3]);
    }
    Transpose() {
        var content = Array(16);
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                content[j * 4 + i] = this.At(i, j);
            }
        }
        return new Matrix(content);
    }
    Print() {
        for (var i = 0; i < 4; i++) {
            console.log("|" + this.At(i, 0) + "|" + this.At(i, 1) + "|" + this.At(i, 2) + "|" + this.At(i, 3) + "|");
        }
    }
    static Identity() {
        return new Matrix([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    floatEqual(a, b) {
        if (Math.abs(a - b) < Number.EPSILON)
            return true;
        return false;
    }
}
function MatrixTest() {
    console.log("Matrix testing starts.");
    var ma = new Matrix([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    var mb = new Matrix([0.2 - 0.3 + 0.1, 0.2 - 0.3 + 0.1, 0.2 - 0.3 + 0.1, 0.2 - 0.3 + 0.1, 0.2 - 0.3 + 0.1, 0.2 - 0.3 + 0.1, 0.2 - 0.3 + 0.1, 0.2 - 0.3 + 0.1, 0.2 - 0.3 + 0.1, 0.2 - 0.3 + 0.1, 0.2 - 0.3 + 0.1, 0.2 - 0.3 + 0.1, 0.2 - 0.3 + 0.1, 0.2 - 0.3 + 0.1, 0.2 - 0.3 + 0.1, 0.2 - 0.3 + 0.1]);
    if (ma.Equal(mb) == false) {
        console.log("Matrix Equality wrong.");
    }
    console.log(ma.At(0, 0));
    console.log(mb.At(0, 1));
    var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var mc = new Matrix(num);
    console.log("mc:");
    mc.Print();
    for (var i = 0; i < num.length; i++) {
        num[i] += num.length;
    }
    var md = new Matrix(num);
    console.log("md:");
    md.Print();
    var me = mc.Mul(md);
    console.log("me:");
    me.Print();
    console.log("me transpose:");
    me.Transpose().Print();
    console.log("Matrix testing ends.");
}

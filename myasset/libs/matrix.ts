class Matrix {
    mNumber: Array<number>
    constructor(nums : Array<number>) {
        if(nums.length != 16) 
            throw "Matrix requires exactly 16 numbers."
        this.mNumber = Object.assign([], nums);
    }
    At(i:number, j:number):number {
        return this.mNumber[i*4+j];
    }

    GetRow(i : number) : Array<number> {
        var num = [0, 0, 0, 0];
        num[0] = this.At(i, 0);
        num[1] = this.At(i, 1);
        num[2] = this.At(i, 2);
        num[3] = this.At(i, 3);
        return num;
    }
    
    SetRow(i : number, vals : Array<number>) {
        this.mNumber[i*4 + 0] = vals[0];
        this.mNumber[i*4 + 1] = vals[1];
        this.mNumber[i*4 + 2] = vals[2];
        this.mNumber[i*4 + 3] = vals[3];
    }

    Equal(mb : Matrix):boolean {
        for(var i = 0; i < this.mNumber.length; i++) {
            if(this.floatEqual(this.mNumber[i], mb.mNumber[i]) == false) {
                return false;
            }
        }
        return true;
    }

    Mul(mb : Matrix): Matrix {
        var content = Array<number>(16);
        for(var i = 0; i < 4; i++) {
            for(var j = 0; j < 4; j++) {
                var cur = this.At(i, 0) * mb.At(0, j) + this.At(i, 1) * mb.At(1, j) + this.At(i, 2) * mb.At(2, j) + this.At(i, 3) * mb.At(3, j);
                content[i*4+j] = cur;
            }
        }
        return new Matrix(content);
    }

    MulTuple(t : Tuple):Tuple {
        var content = Array<number>(4);
        for(var i = 0; i < 4; i++) {
            var cur = this.At(i, 0) * t.x + this.At(i, 1) * t.y + this.At(i, 2) * t.z + this.At(i, 3) * t.w;
            content[i] = cur;
        }
        return new Tuple(content[0], content[1], content[2], content[3]);
    }

    Transpose():Matrix {
        var content = Array<number>(16);
        for(var i = 0; i < 4; i++) {
            for(var j = 0; j < 4; j++) {
                content[j*4+i] = this.At(i, j);
            }
        }
        return new Matrix(content);
    }

    Print() {
        for(var i = 0; i < 4; i++) {
            console.log("|" + this.At(i, 0) + "|" + this.At(i, 1) + "|" + this.At(i, 2) + "|" + this.At(i, 3) + "|");
        }
    }

    private swapRow(a:number, b:number) {
        var rowA = this.GetRow(a);
        var rowB = this.GetRow(b);
        this.SetRow(b, rowA);
        this.SetRow(a, rowB);
    }

    Inversion(): Matrix {
        var tmpMatrix = new Matrix(this.mNumber);
        var res = Matrix.Identity();
        for(var x = 0; x < 4; x++) {
            //find none zero
            if(tmpMatrix.At(x, x) == 0) {
                var found = false;
                for(var i = x+1; i < 4; i++) {
                    if(tmpMatrix.At(x, i) != 0) {
                        tmpMatrix.swapRow(x, i);
                        res.swapRow(x, i);
                        found = true;
                    }
                }
                if(!found)
                    throw "Matrix Inversion failed.";
            }
            var curRow = tmpMatrix.GetRow(x);
            var resRow = res.GetRow(x);
            if(!tmpMatrix.floatEqual(curRow[x], 1.0)) {
                var d = curRow[x];
                curRow[0] /= d;
                curRow[1] /= d;
                curRow[2] /= d;
                curRow[3] /= d;
                tmpMatrix.SetRow(x, curRow);
                resRow[0] /= d;
                resRow[1] /= d;
                resRow[2] /= d;
                resRow[3] /= d;
                res.SetRow(x, resRow);
            }

            for(var i = 0; i < 4; i++) {
                if(i == x)
                    continue;
                if(tmpMatrix.At(i, x) != 0)  {
                    var co = tmpMatrix.At(i, x);
                    var thatRow = tmpMatrix.GetRow(i);
                    var resThatRow = res.GetRow(i);
                    for(var j = 0; j < 4; j++) {
                        thatRow[j] -= curRow[j] * co;
                        resThatRow[j] -= resRow[j] * co;
                    }

                    tmpMatrix.SetRow(i, thatRow);
                    res.SetRow(i, resThatRow);
                }
            }
        }
        return res;
    }

    static Identity():Matrix {
        return new Matrix([1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1]);
    }

    private floatEqual(a : number, b : number):boolean {
        if (Math.abs(a-b) < Number.EPSILON)
            return true;
        return false;
    }
}


function MatrixTest() {
    console.log("Matrix testing starts.");
    var ma = new Matrix([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    var mb = new Matrix([0.2-0.3+0.1,0.2-0.3+0.1,0.2-0.3+0.1,0.2-0.3+0.1,0.2-0.3+0.1,0.2-0.3+0.1,0.2-0.3+0.1,0.2-0.3+0.1,0.2-0.3+0.1,0.2-0.3+0.1,0.2-0.3+0.1,0.2-0.3+0.1,0.2-0.3+0.1,0.2-0.3+0.1,0.2-0.3+0.1,0.2-0.3+0.1]);
    
    if(ma.Equal(mb) == false) {
        console.log("Matrix Equality wrong.");
    }
    console.log(ma.At(0, 0));
    console.log(mb.At(0, 1));

    var num = [8,-5,9,2, 7,5,6,1, -6,0,9,6, -3,0,-9,-4];
    var mc = new Matrix(num);
    console.log("mc:");
    mc.Print();
    for(var i = 0; i < num.length; i++) {
        num[i] += num.length;
    }
    var md = new Matrix(num);
    console.log("md:")
    md.Print();
    var me = mc.Mul(md);
    console.log("me:")
    me.Print();

    console.log("me transpose:")
    me.Transpose().Print()

    console.log("mc inversion:")
    mc.Inversion().Print();

    try {
        ma.Inversion().Print();
    } catch {
        console.log("Matrix Inversion failure.");
    }
    console.log("Matrix testing ends.");
}
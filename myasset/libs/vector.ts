class Tuple {
    x : number;
    y : number;
    z : number;
    w : number;

    constructor(x:number, y:number, z:number, w:number) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    Assign(t2:Tuple) {
        this.x = t2.x;
        this.y = t2.y;
        this.z = t2.z;
        this.w = t2.w;
    }

    isVector() : boolean {
        return false;
    }
    isPoint() : boolean {
        return false;
    }

    Plus(t2 : Tuple) : Tuple {
        var res : Tuple 
        return res;
    }
    Scalar(s : number) : Tuple {
        var res = new Tuple(this.x*s, this.y*s, this.z*s, this.w*s);
        return res;
    }
    Dot(t2:Tuple) : number {
        var res = this.x*t2.x + this.y*t2.y + this.z*t2.z + this.w*t2.w;
        return res;
    }

    
}

class Point extends Tuple {
    constructor(x: number, y:number, z:number) {
        super(x, y, z, 1.0);
    }
    isPoint() : boolean {
        return true;
    }
    Plus(t : Tuple) : Point {
        var v = t as Vector;
        if(!v.isVector()) {
            throw "Adding Point with something other than Vector";
        }
        return new Point(this.x + v.x, this.y + v.y, this.z + v.z);
    }
}

class Vector extends Tuple {
    constructor(x:number, y:number, z:number) {
        super(x, y, z, 0.0);
    }
    isVector() : boolean {
        return true;
    }

    Cross(v2 : Vector) : Vector { 
        var cx = this.y * v2.z - this.z * v2.y;
        var cy = this.z * v2.x - this.x * v2.z;
        var cz = this.x * v2.y - this.y * v2.x;
        return new Vector(cx, cy, cz);
    }
}

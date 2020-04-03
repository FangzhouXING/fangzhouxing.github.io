class Tuple {
    constructor(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    Assign(t2) {
        this.x = t2.x;
        this.y = t2.y;
        this.z = t2.z;
        this.w = t2.w;
    }
    At(i) {
        switch (i) {
            case 0: return this.x;
            case 1: return this.y;
            case 2: return this.z;
            case 3: return this.w;
            default: throw "Tuple access out of bound";
        }
    }
    isVector() {
        return false;
    }
    isPoint() {
        return false;
    }
    Plus(t2) {
        var res;
        return res;
    }
    Scalar(s) {
        var res = new Tuple(this.x * s, this.y * s, this.z * s, this.w * s);
        return res;
    }
    Dot(t2) {
        var res = this.x * t2.x + this.y * t2.y + this.z * t2.z + this.w * t2.w;
        return res;
    }
}
class Point extends Tuple {
    constructor(x, y, z) {
        super(x, y, z, 1.0);
    }
    isPoint() {
        return true;
    }
    Plus(t) {
        var v = t;
        if (!v.isVector()) {
            throw "Adding Point with something other than Vector";
        }
        return new Point(this.x + v.x, this.y + v.y, this.z + v.z);
    }
}
class Vector extends Tuple {
    constructor(x, y, z) {
        super(x, y, z, 0.0);
    }
    isVector() {
        return true;
    }
    Cross(v2) {
        var cx = this.y * v2.z - this.z * v2.y;
        var cy = this.z * v2.x - this.x * v2.z;
        var cz = this.x * v2.y - this.y * v2.x;
        return new Vector(cx, cy, cz);
    }
}

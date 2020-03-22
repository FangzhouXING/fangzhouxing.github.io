class Color extends Tuple {
    constructor(r, g, b, a = 1.0) {
        super(r, g, b, a);
    }
    r() {
        var val = Math.round(this.x * 255);
        if (val > 255) {
            val = 255;
        }
        return val;
    }
    g() {
        var val = Math.round(this.y * 255);
        if (val > 255) {
            val = 255;
        }
        return val;
    }
    b() {
        var val = Math.round(this.z * 255);
        if (val > 255) {
            val = 255;
        }
        return val;
    }
    a() {
        var val = Math.round(this.w * 255);
        if (val > 255) {
            val = 255;
        }
        return val;
    }
    Mul(c2) {
        return new Color(this.x * c2.x, this.y * c2.y, this.z * c2.z, this.w * c2.w);
    }
}

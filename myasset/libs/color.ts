class Color extends Tuple {
    constructor(r : number, g:number, b:number, a:number = 1.0) {
        super(r, g, b, a);
    }
    r() : number {
        var val = Math.round(this.x * 255);
        if(val > 255) {
            val = 255
        }
        return val;
    }
    g() : number {
        var val = Math.round(this.y * 255);
        if(val > 255) {
            val = 255
        }
        return val;
    }
    b() : number {
        var val = Math.round(this.z * 255);
        if(val > 255) {
            val = 255
        }
        return val;
    }
    a() : number {
        var val = Math.round(this.w * 255);
        if(val > 255) {
            val = 255
        }
        return val;
    }
    Mul(c2 : Color) : Color {
        return new Color(this.x*c2.x, this.y*c2.y, this.z*c2.z, this.w*c2.w);
    }
}
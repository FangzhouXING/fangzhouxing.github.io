class RTAnimation {
    private am_context : CanvasRenderingContext2D;
    public image : ImageData;
    private startPending : boolean
    private paused : boolean;
    private stopping : boolean;
    private finalized : boolean;
    public W : number;
    public H : number;
    constructor(private readonly canvas: HTMLCanvasElement) {
        this.am_context = this.canvas.getContext('2d');
        
        this.W = this.canvas.width;
        this.H = this.canvas.height;
        this.image = this.am_context.getImageData(0, 0, this.W, this.H);

        this.startPending = true;
        this.finalized = false;
    }
    Context() : CanvasRenderingContext2D {
        return this.am_context;
    }
    Begin() {
        if(this.startPending) {
            this.startPending = false;
            this.prepare();
            this.paused = false;
            this.stopping = false;
            window.requestAnimationFrame(() => this.loop());
        }
    }

    Paused() : boolean {
        return this.paused;
    }
    OnPause() {}

    Pause() {
        this.paused = true;
        this.OnPause();
    }
    OnUnPause() {}

    Unpause() {
        if(!this.stopping) {
            this.paused = false;
            this.OnUnPause();
        }
    }

    Stopped() : boolean {
        return this.stopping;
    }
    Stop() {
        this.Pause();
        this.stopping = true;
        if(!this.finalized) {
            this.finalize();
        }
    }

    loop() {
        if(!this.Paused()) {
            this.update();
            this.render();
            this.am_context.putImageData(this.image, 0, 0);
        }

        if(!this.Stopped()) {
            window.requestAnimationFrame(() => this.loop());
        }
    }

    prepare() :void {}
    update() :void {}
    render() :void {}
    finalize() :void {}

    //Render related;
    SetPixel(pos_x : number, pos_y : number, color : Color) {
        var x = Math.round(pos_x);
        var y = Math.round(this.H-1-pos_y);
        if(x < 0 || x >= this.W || y < 0 || y >= this.H) {
            return;
        }
        var offset = (y * this.W + x) * 4;
        //console.log(color.r(), color.g(), color.b(), color.a());
        this.image.data[offset + 0] = color.r();
        this.image.data[offset + 1] = color.g();
        this.image.data[offset + 2] = color.b();
        this.image.data[offset + 3] = color.a();
    }
}
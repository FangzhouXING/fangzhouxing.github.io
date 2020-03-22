class RT2 extends RTAnimation {
    t : number;

    colors = {};
    prepare() {
        console.log("executing RT2.");
        this.t = Date.now();
        
        this.pos_x = 0;
        this.pos_y = 0;
        this.v_x = getSliderValue(xSpeedSlider);
        this.v_y = getSliderValue(ySpeedSlider);

        this.colors['red'] = new Color(255, 0, 0);
        this.colors['black'] = new Color(0, 0, 0);

    }

    update() {
        var t2 = Date.now();
        var dt = t2 - this.t;
        this.t = t2;

        console.log("dt", dt)
        this.pos_x += this.v_x * (dt/1000);
        this.pos_y += this.v_y * (dt/1000);
        this.v_y += this.g_y*(dt/1000);
    }
    
    pos_x : number;
    pos_y : number;
    v_x : number;
    v_y : number;
    g_y : number = -10;
    render() {
        
        for(var i = 0; i < this.H; i++) {
            this.SetPixel(0, i, this.colors['black']);
        }
        for(var i = 0; i < this.W; i++) {
            this.SetPixel(i, 0, this.colors['black']);
        }
        
        this.SetPixel(this.pos_x, this.pos_y, this.colors['red']); 
        console.log(this.pos_x, this.pos_y);
    }

    finalize() {
        console.log("RT2 finalizing.");
    }

    OnPause() {
    }
    OnUnPause() {
        this.t = Date.now();
    }
}

var Canvas = document.getElementById("RTScene") as HTMLCanvasElement;
var rt2 = new RT2(Canvas);

var Paused = false;

function BeginButton() : void {
    rt2.Begin();
}

function PauseButton() : void {
    if(Paused) {
        rt2.Unpause();
        Paused = !Paused;
    } else {
        rt2.Pause();
        Paused = !Paused;
    }
}

function StopButton() : void {
    rt2.Stop();
}
var xSpeedSlider = document.getElementById("xspeed");
var xSpeedText = document.getElementById("XSpeedText");

function xSlider() {
    xSpeedText.innerHTML = "X: " + getSliderValue(xSpeedSlider);
} 

var ySpeedSlider = document.getElementById("yspeed");
var ySpeedText = document.getElementById("YSpeedText");

function ySlider() {
    ySpeedText.innerHTML = "Y: " + getSliderValue(ySpeedSlider);
} 

function getSliderValue(slider) {
    return Number(slider.value);
}
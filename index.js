const rust = import('./pkg/index');
const canvas = document.getElementById("rustCanvas");
const gl = canvas.getContext("webgl", {antialias: true});


rust.then( m => {
    if(!gl) {
        alert('Failed to initialize WebGL');
        return;
    }

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    const FPS_THROTTLE = 1000.0 / 30.0;
    let lastDrawTime = -1;

    function render() {
        window.requestAnimationFrame(render);
        const currTime = Date.now();

        const coltonsClient = new m.ColtonsClient();
        const initialTime = Date.now();



        if(currTime >= lastDrawTime + FPS_THROTTLE) {
            lastDrawTime = currTime;

            if(window.innerHeight != canvas.height || window.innerWidth != canvas.width) {
                //resize canvas
            }
            
            const elapsedTime = currTime - initialTime;
            
            coltonsClient.update(elapsedTime,window.innerHeight, window.innerWidth)
            coltonsClient.render();

        }
    }

    render();
})
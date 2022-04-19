function getSquare(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: 1 + (evt.clientX - rect.left) - (evt.clientX - rect.left)%10,
        y: 1 + (evt.clientY - rect.top) - (evt.clientY - rect.top)%10
    };
    }

    function drawGrid(context) {
        for (var x = 0.5; x < 1001; x += 20) {
        context.moveTo(x, 0);
        context.lineTo(x, 1000);
        }
        
        for (var y = 0.5; y < 1001; y += 20) {
        context.moveTo(0, y);
        context.lineTo(1000, y);
        }
        
        
        context.strokeStyle = "#ddd";
        context.stroke();
        //imageFill(context);
    }

    function fillSquare(context, x, y){
        context.fillStyle = "gray"
        console.log("x: ", x, " y: ", y);
        context.fillRect(x,y,19,19);
    }

    function imageFill(context){
        context.fillStyle = 'red';
        var x = 0.5;
        var y = 0.5;
        for(;x < 1000 && y < 1000; x+=10, y+=10){
            context.fillRect(x,y,9,9);
        }
    }
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function getModal(evt, context){
        var modaldiv = document.getElementById('modal');
        var span = document.getElementsByClassName('close')[0];
        modaldiv.style.display = "block";
        span.onclick = function() {
            modaldiv.style.display = "none";
        }
        window.onclick = function(evt) {
            if (evt.target == modal){
                modaldiv.style.display = "none";
            }
        }
    }
    

    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    //canvas.style = "position:absolute; left: 50%; width: 400px; margin-left: -200px;";
    canvas.style = "position: absolute; top: 400px; left: 0px; right: 0px; bottom: 0px; margin: auto; border:2px solid blue;";
    drawGrid(context);

    canvas.addEventListener('click', function(evt) {
        var mousePos = getSquare(canvas, evt);
        fillSquare(context, mousePos.x, mousePos.y);
        getModal(evt, context);
    }, false);
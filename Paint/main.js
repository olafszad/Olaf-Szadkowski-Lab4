document.getElementById('addImg').onchange = function(e){
    var image = new Image();
    image.src = URL.createObjectURL(this.files[0]);
    image.onload = draw;
    image.onerror = failed;
    
};
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function draw(){
    canvas.width = this.width;
    canvas.height = this.height;
    ctx.drawImage(this, 0,0);   
    
}
var brightnessFilter = document.getElementById('brightness');
brightnessFilter.addEventListener('change', function(e){
    var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);    
    var d = imgData.data;
    for(let i = 0; i<d.length; i+=10){
        var barInfo = parseInt(brightnessFilter.value, 10);
        d[i] += (barInfo/100)*255;
        d[i+1]+=(barInfo/100)*255;;
        d[i+2]+=(barInfo/100)*255;;
    }
    ctx.putImageData(imgData, 0, 0);    
});

    var mousedown = false;
    canvas.addEventListener('mousedown', down);
    canvas.addEventListener('mouseup', toggleDraw);
    canvas.addEventListener('mousemove', function(e){
        var mousePos = getMousePos(canvas, e);
        var posx = mousePos.x;
        var posy = mousePos.y;
        paint(canvas, posx, posy)
    });
    function down(){
        mousedown = true;
    }
    function toggleDraw(){
        mousedown = false;
    }
    function getMousePos(canvas, e){
        var rect = canvas.getBoundingClientRect();
        return{
            x:e.clientX - rect.left,
            y:e.clientY - rect.top
        };
    }
    document.getElementById('color').addEventListener('change', changeColor);
    function changeColor(){
        var color = document.getElementById('color').value;
        return color;
    }
    function paint(canvas, posx, posy){
        var context = canvas.getContext('2d');
        if(mousedown){
            var radius = 10;
            var startAngle = 1.3 * Math.PI;
            var endAngle =1.29 * Math.PI;
            var counterClockwise = false;
            context.beginPath();
            context.arc(posx, posy, radius, startAngle, endAngle, counterClockwise);
            context.lineWidth = 50;
            context.fillStyle = changeColor();
            context.fill();
        }
    }
    




var canvas=document.getElementById('myCanvas');
canvas.addEventListener('mousedown',down);
canvas.addEventListener('mouseup',up);
canvas.addEventListener('mousemove',function(e){
    var mousePos=getMousePos(canvas,e);
    var posx=mousePos.x;
    var posy=mousePos.y;

    drawCircle(posx,posy,canvas)
});
var md;
function down(){
    md=true;
}

function up(){
    md=false;
}

function getMousePos(canvas,e){

    var pos=canvas.getBoundingClientRect();
    
    return  {
        x:e.clientX-pos.left,
        y:e.clientY-pos.top
    }
}


function drawCircle(x,y,canvas){

    var ctx=canvas.getContext('2d');
    var radius=x/10;
    if(md){
            ctx.beginPath();
            ctx.arc(x, 75,radius, 0, 2 * Math.PI);
            ctx.stroke();
    }
}
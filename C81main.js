var canvas=document.getElementById("my_canvas");

ctx=canvas.getContext("2d");
var color="black";



canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
console.log("x="+mouse_x+",y="+mouse_y);
circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,40,0,360);
ctx.stroke();

}
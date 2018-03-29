console.log("testings");

var in_w = window.innerWidth;
var in_h = window.innerHeight;

console.log("in_w");
console.log(in_w);
console.log("in_h");
console.log(in_h);

var canvas = document.getElementById("a");
var ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

console.log("l16");

var colors = {};
colors.bgcolor = "#ECECEC"; //GRAY
colors.col2 = "#C5E8F3"; //LBLUE
colors.col3 = "#DB9999"; //LRED

console.log("l23");

ctx.fillStyle = colors.bgcolor;
ctx.fillRect(0,0,in_w,in_h);

console.log("l24");

ctx.fillStyle = colors.col2;
ctx.fillRect(20,20,100,100);

// setting game w/h
var h, w;

if (in_w < 2*in_h){
  h = 2*w;
} else {
  w = h/2;
}

ctx.fillStyle = colors.col3;
ctx.fillRect(10,14,h,w);

console.log(w);
console.log(h);

ctx.beginPath();
ctx.moveTo(w,0);
ctx.lineTo(0,h);
ctx.stroke();

// ctx.fillStyle = colors.bgcolor;
// ctx.fillRect(0,0,in_w,in_h);

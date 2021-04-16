var mouseEvent = "empty";

var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";

width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;

    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown")
    {
        ctx.beginPath();

        ctx.strokeStyle = color;

        ctx.lineWidth = width_of_line;

        console.log("Last Position of X and Y Coordinates = ");

        console.log("X = " + last_position_of_x + "Y = " + last_position_of_y);

        ctx.moveTo(last_position_of_x, last_position_of_y);


        console.log("Current Position of X and Y coordinates = ");

        console.log("X = " + current_position_of_mouse_x + "Y = " + current_position_of_mouse_y);

        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);

        ctx.stroke();

    }

    last_position_of_x = current_position_of_mouse_x; 
    last_position_of_y = current_position_of_mouse_y;

}


canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) 
{
    mouseEvent = "mouseUp";

    console.log(mouseEvent);
}


canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseLeave";
    
    console.log(mouseEvent);
}

window.addEventListener("keydown", keydown);

function keydown(e)
{
    keyPressed = e.keyCode;

    console.log(keyPressed);

    if (keyPressed == "27")
    {
        clearArea();

        console.log("Esc Clicked!");
    }
}

function clearArea() 
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


var width = screen.width;

new_width = screen.width - 70;

new_height = screen.height - 300;

if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
    color = document.getElementById("color").value;

    width_of_line = document.getElementById("width_of_line").value;

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e)
{

    console.log("my_touchMove");

    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();

        ctx.strokeStyle = color;

        ctx.lineWidth = width_of_line;

        console.log("Last Position of X and Y Coordinates = ");

        console.log("X = " + last_position_of_x + "Y = " + last_position_of_y);

        ctx.moveTo(last_position_of_x, last_position_of_y);


        console.log("Current Position of X and Y coordinates = ");

        console.log("X = " + current_position_of_touch_x + "Y = " + current_position_of_touch_y);

        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);

        ctx.stroke();

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;

}


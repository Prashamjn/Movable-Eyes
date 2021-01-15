var balls = document.getElementsByClassName("ball");
document.onmousemove = function() {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    // event.clientX => gets the horizontal coordinate of the mouse
    // event.clientY => gets the vertical coordinate of the mouse
    // window.innerWidth => gets the browser width
    // window.innerHeight => gets the browser height
 
    for(var i=0;i<2;i++){
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = "translate(-"+x+",-"+y+")"
    }
}
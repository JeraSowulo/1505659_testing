/**
 * Created by john on 10/03/2016.
 */

var cat = document.querySelector("img");
var angle = 0, lastTime = null;
function animate(time) {
    if (lastTime != null)
        angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = (Math.sin(angle) * 40) + "px";
    cat.style.left = (Math.cos(angle) * 300) + "px";
    requestAnimationFrame(animate);

    if (cat.style.top <100){
    angle*-1;
    requestAnimationFrame(animate);}

}
requestAnimationFrame(animate);

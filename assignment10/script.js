var burger = document.querySelector("#burger");
var container = document.querySelector("#container");
 
container.addEventListener("click", click);
 
function click(a) {
    var start = position(a.currentTarget);
    var xPosition = a.clientX - start.x - (burger.clientWidth / 2);
    var yPosition = a.clientY - start.y - (burger.clientHeight / 2);
     
    burger.style.left = xPosition + "px";
    burger.style.top = yPosition + "px";
}
 
function position(b) {
  var xPos = 0;
  var yPos = 0;
 
  while (b) {
    if (b.tagName == "BODY") {
      var xScroll = b.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = b.scrollTop || document.documentElement.scrollTop;
 
      xPos += (b.offsetLeft - xScroll + b.clientLeft);
      yPos += (b.offsetTop - yScroll + b.clientTop);
    } else {
      xPos += (b.offsetLeft - b.scrollLeft + b.clientLeft);
      yPos += (b.offsetTop - b.scrollTop + b.clientTop);
    }
 
    b = b.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}
function squareNumber(Number){
    var num = document.getElementById('square-input').value;
    var square = (num*num)
    alert("Your number squared is "+ square)
    console.log(square)
}

function halfNumber(Number){
    var num = document.getElementById('half-input').value;
    var half = (num / 2)
    alert("Your number halfed is "+ half)
    console.log(half)
}

function percentOf(Number,Number1){
    var num = document.getElementById('percent1-input').value; 
    var num1 = document.getElementById('percent2-input').value;
    var num2 = (num / num1)
    var percent = (num2 * 100)
    var percent1 = (Math.round(percent * 100) / 100)
    alert(num + " is " + percent1 + "% of " + num1)
    console.log(percent1)
}

function areaOfCircle(Number){
    var radius = document.getElementById('area-input').value;
    var squared = (radius * radius)
    var pi  = (Math.PI)
    var area = (squared * pi)
    var area1 = (Math.round(area * 100) / 100)
    alert("The area of your circle is " + area1)
    console.log(area1)
}
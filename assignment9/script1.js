function find(){
    var p = document.getElementsByTagName('P').length;
    var h1 = document.getElementsByTagName('H1').length;
    var h2 = document.getElementsByTagName('H2').length;
    var h3 = document.getElementsByTagName('H3').length;
    var h4 = document.getElementsByTagName('H4').length;
    var h5 = document.getElementsByTagName('H5').length;
    var h6 = document.getElementsByTagName('H6').length;
    alert("There are " + p + " paragraph tags on this page. There is " + h1 + " h1 tag on this page. There is " + h2 + " h2 tag on this page. There is " + h3 + " h3 tag on this page. There is " + h4 + " h4 tag on this page. There is " + h5 + " h5 tag on this page. There is " + h6 + " h6 tag on this page")
    console.log(square)
}

function find1(){
    var x = document.getElementById("id1").childElementCount
    alert(x)
}

function find2(){
    var x = document.getElementById("id2").childElementCount
    alert(x)
}
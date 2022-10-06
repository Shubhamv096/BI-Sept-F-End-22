console.log('yes thats right');
function changecolor(element){
    document.getElementById("btn").innerHTML = "btnu";
    var currentcolor = element.style.backgroundColor;
    if(currentcolor == "red"){
        element.style.backgroundColor = "green";
    } else {
        element.style.backgroundColor = "red";
    }
}
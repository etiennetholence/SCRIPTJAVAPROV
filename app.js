function backgroundChange() {
    document.body.style.backgroundColor = "blue";
}

function goodVibesText() {
    document.getElementById("demo").innerHTML="Be the best version of you!"
}

function time() {
    var currenttime = Date();
    let time = document.getElementById("time").innerHTML = currenttime;
}

function pictureChange() {
    document.getElementById("pic").src = "dice-6.png";
}

function hideImage() {
    document.getElementById("pic").src = "";
}

function showImage() {
    document.getElementById("pic").src = "dice-6.png";
}

function containerFlex() {
    let containerMinimize = document.querySelector(".container");
    containerMinimize.style.flexWrap ="wrap"
}
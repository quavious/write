const textarea = document.getElementById("jsTextarea");


function returnRandom() {
    let number = Math.floor(Math.random()*2)
    return number;
}

function init() {
    chooseImg = returnRandom();
    document.body.style.backgroundImage = `url(./img/paper${chooseImg}.jpg)`;
}

init()
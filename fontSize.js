const fontSize = document.getElementById("jsFont")
const inputText = document.getElementById("jsTextarea")
const boldFont = document.getElementById("strong-btn")
const italicFont = document.getElementById("i-btn")

var handleBold = 0
var handleItalic = 0

fontSize.addEventListener("change", function() {
    const nextFont = fontSize.options[fontSize.selectedIndex].value;
    inputText.style.fontSize = `${nextFont}px`;
});

function makeFontItalic() {
    if(handleItalic === 0 ) {
        inputText.style.fontStyle = "italic";
        handleItalic = 1;
    }
    else {
        inputText.style.fontStyle = "";
        handleItalic = 0;
    }
}

function makeFontBold() {
    if(handleBold === 0){
        inputText.style.fontWeight = "bold";
        handleBold = 1;
    }
    else {
        inputText.style.fontWeight = "";
        handleBold = 0;
    }
}


boldFont.addEventListener("click", makeFontBold);
italicFont.addEventListener("click", makeFontItalic);

function init() {
    currentFont = document.body.style;
    console.log(currentFont);
} 

init();
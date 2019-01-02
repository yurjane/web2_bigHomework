var imagePlatformBar = document.getElementById("imagePlatform").getElementsByTagName("div")[0];
var imageBigBar = document.getElementById("beBig");
var imagePlatform = document.getElementById("imagePlatform");
var imagePlatformImg = document.getElementById("imagePlatform").getElementsByTagName("img")[0];
var imageBig = imageBigBar.getElementsByTagName("img")[0];
imagePlatformImg.mouseX = 0;
imagePlatformImg.mouseY = 0;
imagePlatform.onmouseenter = function(){
    imageBigBar.style.opacity = "1";
    imagePlatformBar.style.opacity = "1";
    imageBigBar.style.left = "430px"
};
imagePlatform.onmouseleave = function(){
    imageBigBar.style.opacity = "0";
    imagePlatformBar.style.opacity = "0";
    imageBigBar.style.left = "-410px"
};
imagePlatform.onmousemove = function (event) {
    getMousePos(event);
    imageBig.style.left = -parseFloat(imagePlatformImg.mouseX) + "px";
    imageBig.style.top =  -parseFloat(imagePlatformImg.mouseY) + "px";
    imagePlatformBar.style.left = parseFloat(imagePlatformImg.mouseX) - 51 + "px";
    imagePlatformBar.style.top = -408 + parseFloat(imagePlatformImg.mouseY) - 51 + "px";
    if(parseFloat(imagePlatformImg.mouseX) <= 51){
        imageBig.style.left = "-51px";
        imagePlatformBar.style.left = "0px";
    }
    if (parseFloat(imagePlatformImg.mouseX) >= 357){
        imageBig.style.left = "-357px";
        imagePlatformBar.style.left = "306px";
    }
    if (parseFloat(imagePlatformImg.mouseY) <= 51) {
        imageBig.style.top = "-51px";
        imagePlatformBar.style.top = "-408px";
    }
    if (parseFloat(imagePlatformImg.mouseY) >= 357) {
        imageBig.style.top = "-357px";
        imagePlatformBar.style.top = "-102px";
    }
};
function getMousePos(event) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    imagePlatformImg.mouseX = x - imagePlatformImg.offsetLeft;
    imagePlatformImg.mouseY = y - imagePlatformImg.offsetTop;
}
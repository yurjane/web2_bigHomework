var photoBar = document.getElementById("carouselMapPhotoBar");
photoBar.carouselMapTimer = 0;// 轮播图 setInterval 的 Id
var photoBarList = photoBar.children; // 图片列表
for (var a = 0; a < photoBarList.length; a++)
    photoBarList[a].style.left = "-800px";

var photoBarListNum;
var ifStopNum;
var opacityNum;
var opacityNumDown;
var stopTimes = 0;
var signList = document.getElementById("carouselMap").getElementsByTagName("li");
var signNum = 0;
signList[signNum].style.backgroundColor = "#fe6c00";

photoBarListNum = setInterval("photoBarCarouselMap()", 10);
var carouselMap = document.getElementById("carouselMap");
carouselMap.onmouseenter = function(){
    ifStopNum = setInterval("isIfStop()", 5);
    opacityNum = setInterval("goOpacity()", 20);
};// 划入轮播图时准备停止图片并使箭头显现
carouselMap.onmouseleave = function(){
    clearInterval(opacityNum);
    clearInterval(ifStopNum);
    stopNum = setInterval("stopTime()", 1000);
    opacityNumDown = setInterval("downOpacity()", 20);
};// 划出轮播图时启动图片并使箭头消失
function isIfStop(){
    if(parseInt(photoBarList[0].style.left)%800 === 0)
    {
        clearInterval(photoBarListNum);
        clearInterval(stopNum);
    }
}// 鼠标在图片上时判断是否可以停止
function stopTime() {
    stopTimes += 1;
    if(stopTimes > 2){
        photoBarListNum = setInterval("photoBarCarouselMap()", 10);
        clearInterval(stopNum);
        stopTimes = 0;
        signList[signNum].style.backgroundColor = "#e6e5e2";
        signNum = (++signNum)%6;
        signList[signNum].style.backgroundColor = "#fe6c00";
        isIfJump();
    }
}// 轮播时每张图片静止 3 秒

var stopNum;
var stopOfNum = 0;
var moveSpeed;
function photoBarCarouselMap() {
    stopOfNum %= 2;
    if(parseInt(photoBarList[0].style.left)%800 === 0){
        if((++stopOfNum)%2 === 1){
            clearInterval(photoBarListNum);
            stopNum = setInterval("stopTime()", 1000);
            moveSpeed = 40.5;
        }
    }
    if(stopOfNum%2 === 0)
        moveSpeed -= 1;
    for (var a = 0; a < photoBarList.length; a++){
        if(stopOfNum%2 === 0)
            photoBarList[a].style.left = parseInt(photoBarList[a].style.left) - ((moveSpeed - 0.5)%2 === 1?(moveSpeed + 0.5):(moveSpeed - 0.5)) + "px";
    }
}// 变速动态轮播效果

var gop, gon;
gop = document.getElementById("goPrevious");
gon = document.getElementById("goNext");
gop.style.opacity = "0";
gon.style.opacity = "0";
function goOpacity() {
    gon.style.opacity = parseFloat(gon.style.opacity) + 0.1 + "";
    gop.style.opacity = gon.style.opacity;
    if(parseFloat(gon.style.opacity) >= 1)
        clearInterval(opacityNum);
}// 箭头显现
function downOpacity() {
    gon.style.opacity = parseFloat(gon.style.opacity) - 0.1 + "";
    gop.style.opacity = gon.style.opacity;
    if(parseFloat(gon.style.opacity) <= 0)
        clearInterval(opacityNumDown);
}// 箭头消失

var continuous; //
var numOfJumps; // 跳转次数

document.getElementById("goPrevious").onclick = function() {
    numOfJumps = 0;
    continuous = setInterval("goPreviousContinuous(1)", 10);
    signList[signNum].style.backgroundColor = "#e6e5e2";
    signNum = (--signNum + 6)%6;
    signList[signNum].style.backgroundColor = "#fe6c00";
};// 移动到上一张图片
document.getElementById("goNext").onclick = function() {
    numOfJumps = 0;
    continuous = setInterval("goNextContinuous(1)", 10);
    signList[signNum].style.backgroundColor = "#e6e5e2";
    signNum = (++signNum)%6;
    signList[signNum].style.backgroundColor = "#fe6c00";
};// 移动到下一张图片

for(var a = 0; a < signList.length; a++){
    signList[a].idx = a;
    signList[a].onclick = function(event) {
        var obj = event.target || event.srcElement;
        numOfJumps = 0;
        signList[signNum].style.backgroundColor = "#e6e5e2";
        if(obj.idx - signNum < 0)
            continuous = setInterval("goPreviousContinuous("+ (signNum- obj.idx) + ")", 10);
        else if(obj.idx - signNum > 0)
            continuous = setInterval("goNextContinuous(" + (obj.idx - signNum) + ")", 10);
        signList[obj.idx].style.backgroundColor = "#fe6c00";
        signNum = obj.idx;
    }
}// 点击目录跳转至对应图片

function goPreviousContinuous(numOfDifferences) {
    for(var b = 0; b < numOfDifferences; b++){
        for (var a = 0; a < photoBarList.length; a++)
            photoBarList[a].style.left = parseInt(photoBarList[a].style.left) + 80 + "px";
        if(parseInt(photoBarList[0].style.left)%800 === 0){
            isIfJump();
            numOfJumps++;
        }
    }
    if(numOfJumps === numOfDifferences)
        clearInterval(continuous);
}// 连续地向上 numOfDifferences 张图片移动R
function goNextContinuous(numOfDifferences) {
    for(var b = 0; b < numOfDifferences; b++){
        for (var a = 0; a < photoBarList.length; a++)
            photoBarList[a].style.left = parseInt(photoBarList[a].style.left) - 80 + "px";
        if(parseInt(photoBarList[0].style.left)%800 === 0){
            isIfJump();
            numOfJumps++;
        }
    }
    if(numOfJumps === numOfDifferences)
        clearInterval(continuous);
}// 连续地向下 numOfDifferences 张图片移动

function isIfJump() {
    for(var subscript = 0; subscript < photoBarList.length; subscript++){
        if(parseInt(photoBarList[subscript].style.left)  <= -800*(subscript+1))
            photoBarList[subscript].style.left = parseInt(photoBarList[subscript].style.left) + 4800 + "px";
        else if(parseInt(photoBarList[subscript].style.left) >= 800*(5 - subscript))
            photoBarList[subscript].style.left = parseInt(photoBarList[subscript].style.left) - 4800 + "px";
    }
}
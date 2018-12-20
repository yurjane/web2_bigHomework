var commoditySizeList = document.getElementById("commoditySize").getElementsByTagName("li");
var commoditySizeInput = document.getElementById("commoditySize").getElementsByTagName("input");
var commoditySizeImg = document.getElementById("commoditySize").getElementsByTagName("img");
var size = document.getElementById("whatYouChange").getElementsByTagName("span")[0];
var sign = 0;
commoditySizeInput[sign].style.borderColor = "#ff0853";
commoditySizeImg[sign].src = "./image/duigou.png";
for(var a = 0; a < commoditySizeList.length; a++){
    commoditySizeInput[a].index = a;
    commoditySizeList[a].index = a;
    commoditySizeImg[a].index = a;
    commoditySizeList[a].onclick = function (event) {
        var elem = event.target || event.srcElement;
        commoditySizeInput[sign].style.borderColor = "white";
        commoditySizeImg[sign].src = "";
        sign = elem.index;
        commoditySizeInput[sign].style.borderColor = "#ff0853";
        commoditySizeImg[sign].src = "./image/duigou.png";
        size.innerText = '"' + commoditySizeInput[sign].value + '"';
    };
}
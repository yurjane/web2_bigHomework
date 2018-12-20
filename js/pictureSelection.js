var subscript = 0;
var liList = document.getElementById("imageList").getElementsByTagName("li");
liList[subscript].style.borderColor = "#ff9003";
var pnList = document.getElementById("imageList").getElementsByTagName("img");
var imagePlatformImg = document.getElementById("imagePlatform").getElementsByTagName("img")[0];
var imageBig = document.getElementById("beBig").getElementsByTagName("img")[0];
imagePlatformImg.src = "./image/pp0.jpeg";
imageBig.src = "./image/pp0.jpeg";
pnList[0].style.cursor = "pointer";
pnList[pnList.length - 1].style.cursor = "pointer";
pnList[0].onclick = function () {
    liList[subscript].style.borderColor = "white";
    subscript = (subscript - 1 + pnList.length - 2)%(pnList.length - 2);
    imagePlatformImg.src = "./image/pp" + subscript + ".jpeg";
    imageBig.src = "./image/pp" + subscript + ".jpeg";
    liList[subscript].style.borderColor = "#ff9003";
};
pnList[pnList.length - 1].onclick = function () {
    liList[subscript].style.borderColor = "white";
    subscript = (subscript + 1)%(pnList.length - 2);
    imagePlatformImg.src = "./image/pp" + subscript + ".jpeg";
    imageBig.src = "./image/pp" + subscript + ".jpeg";
    liList[subscript].style.borderColor = "#ff9003";
};
for(var sign = 1; sign < pnList.length - 1; sign++){
    pnList[sign].index = sign - 1;
    pnList[sign].onclick = function (event) {
        var elem = event.target || event.srcElement;
        liList[subscript].style.borderColor = "white";
        subscript = elem.index;
        imagePlatformImg.src = "./image/pp" + subscript + ".jpeg";
        imageBig.src = "./image/pp" + subscript + ".jpeg";
        liList[subscript].style.borderColor = "#ff9003";
    }
}
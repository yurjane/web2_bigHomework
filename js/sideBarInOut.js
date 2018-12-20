var sideBarList = document.getElementById("sideBar").children;
var smallCode = document.getElementById("smallQRCode");
var bigCode = document.getElementById("bigQRCode");
for(var subscript = 0; subscript < sideBarList.length; subscript++){
    sideBarList[subscript].index = subscript;
    sideBarList[subscript].style.left = "0";
    sideBarList[subscript].goInNum = 0;
    sideBarList[subscript].goOutNum = 0;
    sideBarList[subscript].onmouseenter =function(event){
        var elem = event.target || event.srcElement;
        clearInterval(elem.goInNum);
        elem.goOutNum = setInterval(function () {
            (function(elem) {
                elem.style.left = parseInt(elem.style.left) - 1 + "px";
                if(parseInt(elem.style.left) <= -81){
                    clearInterval(elem.goOutNum);
                    elem.style.left = "-81px";
                }
            })(elem);
        }, 3);
        if(elem.index === 2){
            smallCode.style.opacity = "0";
            bigCode.style.opacity = "1";
        }
    };
    sideBarList[subscript].onmouseleave =function(event){
        var elem = event.target || event.srcElement;
        clearInterval(elem.goOutNum);
        elem.goInNum = setInterval(function () {
            (function(elem) {
                elem.style.left = parseInt(elem.style.left) + 1 + "px";
                if(parseInt(elem.style.left) >= 0){
                    clearInterval(elem.goInNum);
                    elem.style.left = "0";
                }
            })(elem);
        }, 3);
        if(elem.index === 2){
            smallCode.style.opacity = "1";
            bigCode.style.opacity = "0";
        }
    };
}


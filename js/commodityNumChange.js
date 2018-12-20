var add = document.getElementById("commodityNumAdd");
var less = document.getElementById("commodityNumLess");
var num = document.getElementById("commodityOfNum");
var maxNum = document.getElementById("commodityNum").getElementsByTagName("span")[0];
add.onclick = function () {
    num.value = parseInt(num.value) + 1;
    less.style.cursor = "pointer";
    if(parseInt(num.value) >= parseInt(maxNum.innerText)){
        num.value = parseInt(maxNum.innerText);
        add.style.cursor = "not-allowed";
    }

};
less.onclick = function () {
    num.value = parseInt(num.value) - 1;
    add.style.cursor = "pointer";
    if(parseInt(num.value) <= 1){
        num.value = 1;
        less.style.cursor = "not-allowed";
    }
};
num.onchange = function () {
    if(parseInt(num.value) >= 5){
        num.value = 5;
        less.style.cursor = "pointer";
        add.style.cursor = "not-allowed";
    }
    else if(parseInt(num.value) <= 1){
        num.value = 1;
        add.style.cursor = "pointer";
        less.style.cursor = "not-allowed";
    }
};
num.onkeydown =function (event) {
    if(event.keyCode === 13){
        num.blur();
        return false;
    }
}
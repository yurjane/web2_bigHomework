var inShoppingCartButton = document.getElementById("inShoppingCart");
var inShoppingCartIsOk = document.getElementById("inShoppingCartIsOk");
var afterClick = document.getElementById("complete");
inShoppingCartIsOk.style.left = -document.documentElement.clientWidth + "px";
inShoppingCartIsOk.style.width = document.documentElement.clientWidth + "px";
inShoppingCartIsOk.style.height = document.documentElement.clientHeight + "px";
afterClick.style.left = (parseFloat(inShoppingCartIsOk.style.width) - 408)/2 + "px";
afterClick.style.top = (parseFloat(inShoppingCartIsOk.style.height) - 228)/2 + "px";
console.log(document.documentElement.clientHeight);
inShoppingCartButton.onclick = function () {
    inShoppingCartIsOk.style.left = "0";
    inShoppingCartIsOk.style.opacity = "1";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
};
document.getElementById("completeOut").onclick = function () {
    inShoppingCartIsOk.style.left = -window.screen.availWidth + "px";
    inShoppingCartIsOk.style.opacity = "0";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
};
document.getElementById("continueShopping").onclick = function () {
    inShoppingCartIsOk.style.left = -window.screen.availWidth + "px";
    inShoppingCartIsOk.style.opacity = "0";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
};
document.getElementById("goToPay").onclick = function () {
    window.location.href = "";
};
function howMany() {
    var fee = document.getElementById("howManyFee").children[document.getElementById("howManyFee").selectedIndex].value;
    var span = document.getElementById("callFee");
    span.innerText = "￥" + fee;
}
var newsletterList = document.getElementById("newsletterList").children;
console.log(newsletterList);
var newsletterListId;
newsletterList.onmouseover = function() {
    clearInterval(newsletterListId);
};
newsletterList.onmouseout = function() {
    newsletterListId = setInterval("newsletterCarouselMap()", 100);
};
newsletterListId = setInterval(newsletterCarouselMap(), 100);
function newsletterCarouselMap() {
    for(var a in newsletterList.children){
        console.log();
        a.style.marginTop = (a.style.top - 3.2) + "px";
    }
}
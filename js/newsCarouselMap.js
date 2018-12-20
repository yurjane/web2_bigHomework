var newsletterList = document.getElementById("newsletterList");
newsletterList.newsletterListId = 0;
var liGroup = newsletterList.getElementsByTagName("li");
for(var a = 0; a < liGroup.length; a++)
    liGroup[a].style.top = "0px";
newsletterList.onmouseenter = function() {
    clearInterval(newsletterList.newsletterListId);
};
newsletterList.onmouseleave = function() {
    newsletterList.newsletterListId = setInterval(function() {
        for(var a = 0; a < liGroup.length; a++){
            liGroup[a].style.top = parseFloat(liGroup[a].style.top) - 0.16 + "px";
            if(parseFloat(liGroup[a].style.top) <= -29*(a+1))
                liGroup[a].style.top = parseFloat(liGroup[a].style.top) + 754 + "px";
        }
    }, 5);
};
newsletterList.newsletterListId = setInterval(function() {
    for(var a = 0; a < liGroup.length; a++){
        liGroup[a].style.top = parseFloat(liGroup[a].style.top) - 0.16 + "px";
        if(parseFloat(liGroup[a].style.top) <= -29*(a+1))
            liGroup[a].style.top = parseFloat(liGroup[a].style.top) + 754 + "px";
    }
}, 5);
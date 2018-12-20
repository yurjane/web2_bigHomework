var searchBar = document.getElementById("searchBar");
window.onscroll = function () {
    var st = document.documentElement.scrollTop || document.body.scrollTop;
    if(st > 134)
        searchBar.style.position = 'fixed';
    else
        searchBar.style.position = 'static';
};
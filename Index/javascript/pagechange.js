function openSite(evt, tabName) {
    var i, tabcolumn, tablink;
    tabcolumn = document.getElementsByClassName("tabcolumn");
    for (i = 0; i < tabcolumn.length; i++) {
        tabcolumn[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

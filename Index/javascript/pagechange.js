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
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
  }; // This javascript will change the tabs on the same page.



  function calcMode(evt, calcName) {
    var i, calcChange, calcButton;
    calcChange = document.getElementsByClassName("calcChange");
    for (i = 0; i < calcChange.length; i++) {
      calcChange[i].style.display = "none";
    }
    calcButton = document.getElementsByClassName("calcButton");
    for (i = 0; i < calcButton.length; i++) {
      calcButton[i].className = calcButton[i].className.replace(" active", "");
    }
    document.getElementById(calcName).style.display = "flex";
    evt.currentTarget.className += " active";
  }; //With this one you can pick up the right converter for your needs



  function CombinatoricsList(evt, combName) {
    var i, combChange, combButton;
    combChange = document.getElementsByClassName("CombinaChange");
    for (i = 0; i < combChange.length; i++) {
      combChange[i].style.display = "none";
    }
    combButton = document.getElementsByClassName("CombinaSelect");
    for (i = 0; i < combButton.length; i++) {
      combButton[i].className = combButton[i].className.replace(" active", "");
    }
    document.getElementById(combName).style.display = "flex";
    evt.currentTarget.className += " active";
  }; //Using the same Javascript for Combinatorics aswell

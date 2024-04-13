function OpenMenu() {
  var navBarList = document.getElementById("mobile-sidebar");
  var menuBar = document.getElementById("menu-bars");
  var exitMenu = document.getElementById("menuExit");

  menuBar.style.display = "none";
  navBarList.style.display = "block";
  exitMenu.style.display = "block";
}

function closeMenu() {
    var navBarList = document.getElementById("mobile-sidebar");
    var menuBar = document.getElementById("menu-bars");
    var exitMenu = document.getElementById("menuExit");
  
    menuBar.style.display = "block";
    navBarList.style.display = "none";
    exitMenu.style.display = "none";
  }

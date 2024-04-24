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

function randomSong() {
  let arr = ["bad-penny", "shadowplay", "phillby", "messin-with-the-kid"];
  console.log("Array received:", arr);

  if (arr.length === 0) {
    console.error("The array is empty.");
    return;
  }

  var index = Math.floor(Math.random() * arr.length);
  console.log("Selected index:", index);

  var song = document.getElementById(arr[index]);
  console.log("Element found:", song);

  if (song) {
    song.style.display = "block";
    console.log("Element displayed");
  } else {
    console.error("No element found with ID:", arr[index]);
  }
}
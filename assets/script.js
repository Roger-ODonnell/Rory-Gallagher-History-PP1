function OpenMenu() {
  //Nav bar elements found by id
  var navBarList = document.getElementById("mobile-sidebar");
  var menuBar = document.getElementById("menu-bars");
  var exitMenu = document.getElementById("menu-exit");

  //Control objects styling to hide and show elements
  menuBar.style.display = "none";
  navBarList.style.display = "block";
  exitMenu.style.display = "block";
}

function closeMenu() {
  //Nav bar elements found by id
  var navBarList = document.getElementById("mobile-sidebar");
  var menuBar = document.getElementById("menu-bars");
  var exitMenu = document.getElementById("menu-exit");

  //Control objects styling to hide and show elements
  menuBar.style.display = "block";
  navBarList.style.display = "none";
  exitMenu.style.display = "none";
}

//Function to change divs visibility 
function randomSong() {
  //Array of div ids to interact with
  let arr = ["bad-penny", "shadowplay", "phillby", "messin-with-the-kid"];
  console.log("Array received:", arr);

  //Check to make sure array item isnt empty(characters are more than 0 in a array item)
  if (arr.length === 0) {
    console.error("The array is empty.");
    //Return and do not run code below
    return;
  }

  //Get a random item in the array and store it in the index variable
  var index = Math.floor(Math.random() * arr.length);
  console.log("Selected index:", index);

  //Use the index variable to get the corresponding id in the my-song page
  var song = document.getElementById(arr[index]);
  console.log("Element found:", song);

  //If song variable is not null then set its styling to display block showing that element only
  if (song) {
    song.style.display = "block";
    console.log("Element displayed");
    //else return an error to the console stating that id is not found in the array
  } else {
    console.error("No element found with ID:", arr[index]);
  }
}
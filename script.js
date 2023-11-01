
function addDiv() {

let currentDate = new Date();
let hours = currentDate.getHours();
if(hours>12){
  hours = hours-12;
}
let time = hours + ":" + currentDate.getMinutes();
  //create a new P tag, save it in a variable
  let theNewDiv = document.createElement("div");
  let timeDiv = document.createElement("div");
  //add a class to our new div element
  theNewDiv.classList.add("auto-div");
  timeDiv.classList.add("right");
  //set the text inside the div
  theNewDiv.innerHTML = document.getElementById("textInput").value;
  timeDiv.innerHTML = time;

  //find the right tag to add the div to
  //we used an id of "content-area" for
  //the place where we want to add the chirp
  let theContentArea = document.getElementById("content-area");

  //add the new div to that tag
  theContentArea.appendChild(theNewDiv);
  theContentArea.appendChild(timeDiv);
  
  //play a sound when a post is made
  let audio = new Audio("alert_chirp.mp3");
  audio.play();
}

function addImage() {
let currentDate = new Date();
let hours = currentDate.getHours();
if(hours>12){
  hours = hours-12;
}
let time = hours + ":" + currentDate.getMinutes();
  //create a new P tag, save it in a variable
  let theNewDiv = document.createElement("div");
  let timeDiv = document.createElement("div");
  //add a class to our new div element
  theNewDiv.classList.add("auto-div");
  timeDiv.classList.add("right");

  //create image tag to put into the div
  theImgTag = "<img src='" + document.getElementById("imgInput").value + "' width = 100 height = 100>";

  //set the text inside the div
  theNewDiv.innerHTML = theImgTag;
  timeDiv.innerHTML = time;

  //find the right tag to add the div to
  //we used an id of "content-area" for
  //the place where we want to add the twit
  let theContentArea = document.getElementById("content-area");

  //add the new div to that tag
  theContentArea.appendChild(theNewDiv);
  theContentArea.appendChild(timeDiv);

  //play a sound when a post is made
  let audio = new Audio("alert_image.mp3");
  audio.play();

  var input = document.getElementById("textInput"); //Get the input box
  input.addEventListener("keyup", function(event) {  //Check keys
    if (event.keyCode === 13) {  //Check for enter key
      event.preventDefault();
      // document.getElementById("my-button").click(); //Should activate the button, but doesn't.
      addDiv(); //Submit the text
      emptyText();  //Clear the input
    }
  });
  var imginput = document.getElementById("imgInput"); //Get the input box
  imginput.addEventListener("keyup", function(event) {  //Check keys
    if (event.keyCode === 13) { //Check for enter key
      event.preventDefault();
      // document.getElementById("my-button").click();  //Should activate the button, but doesn't.
      addImage();  //Submit the image link
      emptyImg();  //Clear the input
    }
  });


  function emptyText()
  {
    document.getElementById("textInput").value = ""; //Clears input box for text
  }
  function emptyImg()
  {
    document.getElementById("imgInput").value = ""; //Clears input box for image links
  }


}

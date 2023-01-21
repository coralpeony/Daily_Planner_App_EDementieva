// save reference to important DOM elements
var timeDisplayEl = $("#time-display");



// handle displaying the time
function displayTime() {
  var rightNow = moment().format("dddd, MMMM Do YYYY");
  timeDisplayEl.text(rightNow);
}

// Assign past present future classes function
function assignClasses() {
    var currentTime = moment().format("H");
  
    for (i = 9; i < 18; i++) {
      //console.log(i, currentTime,"#"+i);
      if (i < currentTime) {
        $("#" + i).addClass("past");
      }
      if (i == currentTime) {
        $("#" + i).addClass("present");
      }
      if (i > currentTime) {
        $("#" + i).addClass("future");
      }
    }
  }
// save reference to important DOM elements
var timeDisplayEl = $("#time-display");



// handle displaying the time
function displayTime() {
  var rightNow = moment().format("dddd, MMMM Do YYYY");
  timeDisplayEl.text(rightNow);
}
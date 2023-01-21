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

  // save to local storage function
function saveTLS(event) {
    event.preventDefault();
  
    // collect data from data attr and the value from the textarea
    const currentHour = event.target.getAttribute("data-hour");
    var input = $(event.target).siblings("textarea").val();
  
    // get the todos object from ls
    var todosFromLS = JSON.parse(localStorage.getItem("todos"));
  
    // add the new todo to the object (using the spread operator)
    var todosToSave = {
      ...todosFromLS,
      [currentHour]: input,
    };
  
    // save the updated todos back in ls
    localStorage.setItem("todos", JSON.stringify(todosToSave));
  
    confirmDiv.text("Task is added to local storage ✔️");
  }
  
  
  $(".saveBtn").on("click", saveTLS);
  
  assignClasses();
  displayTime();
// save reference to important DOM elements
var timeDisplayEl = $("#time-display");
var confirmDiv = $("#confirm");

// handle displaying the time
function displayTime() {
  var rightNow = moment().format("dddd, MMMM Do YYYY");
  timeDisplayEl.text(rightNow);
}

// function to add tasks to the schedule if empty 
function initLocalStorage(params) {
  const isObject = localStorage.getItem("todos");

  if (!isObject) {
    localStorage.setItem("todos", JSON.stringify({}));
  }
}
initLocalStorage();

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

// get items from the local storage
function populateData() {
  var todosFromLS = JSON.parse(localStorage.getItem("todos"));
  var textareas = $("textarea");

  for (let index = 0; index < textareas.length; index++) {
    var textAreaId = textareas[index].id;
    var todoText = todosFromLS[textAreaId];

    if (todoText) {
      $(`#${textAreaId}`).text(todoText);
    }
  }
}
populateData();

$(".saveBtn").on("click", saveTLS);

assignClasses();
displayTime();

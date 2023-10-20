// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs().format('dddd, MMMM DD');

var now = dayjs().format("H A");

var workHours = [
  {time: "8AM", event:"" },
  {time: "9AM", event:"" },
  {time: "10AM", event:"" },
  {time: "11AM", event:"" }, 
  {time: "12PM", event:"" },
  {time: "1PM", event:"" },
  {time: "2PM", event:"" },
  {time: "3PM", event:"" },
  {time: "4PM", event:"" },
  {time: "5PM", event:"" },
  {time: "6PM", event:"" },
];

$(function () {

//consol.log(dayjs().format("dddd, MMMM DD"))
$("#currentDay").text(today);

  // TODO: Add a listener for click events on the save button. This code should use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  

  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});

//local storage check
var workEvents = JSON.parse(localStorage.getItem("workHours"));
if (workEvents){
  workHours = workEvents;
}
//color rows and function
function colorRow(time) {
	var eventNow = format(now, "H A");
	var entryTime = format(time, "H A");
	if (eventNow.isBefore(entryTime) === true) {
		return "future";
	} else if (eventNow.isAfter(entryTime) === true) {
		return "past";
	} else {
		return "present";
	}
}

//save btn function

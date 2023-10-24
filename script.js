var today = dayjs().format('dddd, MMMM DD');
var now = dayjs().format("H A");
var currentHr= new Date().getHours()
$("#currentDay").text(today);
currentHour =  12;
    
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
  ];

function GetArrayIndexForTime(timeStr) {
	let retIndex = -1;
	workHours.forEach((value,index)=>{
		if (value.time.toLowerCase().trim() === timeStr.toLowerCase().trim()) retIndex = index;
	});
	return retIndex;
}
function GetHrStr(id){
  var splitHrDispID = id.split("-");
  var hr = parseInt(splitHrDispID[1]);
	var hrStr = "";
	if (hr > 12) hrStr = (hr % 12) + "PM"; 
	else hrStr = hr + "AM";
	return hrStr;
}

$(function () {
	$(".description").val("");
	$("#currentDay").text(today);
	
	var workEvents = JSON.parse(localStorage.getItem("workHours"));
	if (workEvents){
	  workHours = workEvents;
	  console.log(workHours);
	  
	  workHours.forEach((x)=>{
		  var hr = parseInt(x.time.toLowerCase().trim().replace("am","").replace("pm",""));
		  if(x.time.toLowerCase().trim().includes("pm") && hr != 12) hr = hr + 12;
		  $('#hour-'+ hr).children(".description").val(x.event);
	  })
	}
$(".saveBtn").on("click",function(){
  var hrStr = GetHrStr($(this).parent().attr("id"));
	var workHoursArrIndex = GetArrayIndexForTime(hrStr);
		if(workHoursArrIndex > 0){
			workHours[workHoursArrIndex].event = $(this).parent().children(".description").val();
			console.log(workHours);
			localStorage.setItem("workHours", JSON.stringify(workHours));
    }
  });
	
$("[id^=hour-]").each((index, value)=>{
	var itemHrStr = $(value).children(".hour").html();
	console.log(value);
	console.log(itemHrStr);
	var hr = parseInt(itemHrStr.replace("pm").replace("am"));
	if(itemHrStr.toLowerCase().trim().includes("pm") && hr != 12) hr = hr + 12
  console.log(hr);
	if(hr > currentHr) $(value).addClass("future");
	else if(hr < currentHr) $(value).addClass("past");
  else $(value).addClass("present");
	});
});

function colorRow(time) {
	var eventNow = format(now, "H A");
	var entryTime = format(time, "H A");
	if (eventNow.isBefore(entryTime) === true) {
    return "future";
	} else if (eventNow.isAfter(entryTime) === true) {
		return "past";
	} else {
		return "current";
	}
};




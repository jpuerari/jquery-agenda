//Javascript Functionality for Agenda

//Step 1: Lay Out Variables with Documentation Formt
var now = moment().format('MMMM Do YYYY, h:mm a');
var curHour = moment().format('H')
curHour = parseInt(curHour);
console.log(curHour)

//Step 2: Display Current Time and Button on Page

$("#currentTime").text(now);

var task = localStorage.getItem("9");
$("#9").val(task)
$("#biggerTask").text(task)

//Step 3: Create Button Function to Store Data to Local Storage

$("button").on("click", function(){
  var taskNum = $(this).val()
  console.log(taskNum)
  var task = $(`#${taskNum}`).val();
  console.log(task);

  localStorage.setItem(taskNum, task)
})

//Step 4: Display Text Area to Page
$("textarea").each(function(){
  var calHour = $(this).attr("id");
  calHour = parseInt(calHour);

//Step 4: Create If/Else state to test the time
  if(curHour > calHour){
    $(this).addClass("past")
  } else if (calHour > curHour){
    $(this).addClass("future")
  } else {
    $(this).addClass("present")
  }
});

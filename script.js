




var now = moment().format('MMMM Do YYYY, h:mm a');
var curHour = moment().format('H')
curHour = parseInt(curHour);
console.log(curHour)

$("#currentTime").text(now);

var task = localStorage.getItem("9");
$("#9").val(task)
$("#biggerTask").text(task)

$("button").on("click", function(){
  var task = $("#9").val();
  console.log(task);

  localStorage.setItem("9", task)
})
//function
$("textarea").each(function(){
  var calHour = $(this).attr("id");
  calHour = parseInt(calHour);
  if(curHour > calHour){
    $(this).addClass("past")
  } else if (calHour > curHour){
    $(this).addClass("future")
  } else {
    $(this).addClass("present")
  }
});

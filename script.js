$(function () {
    var saveBtns = $(".saveBtn");

    saveBtns.on("click", function() {
      var timeBlock = $(this).parent();
      var timeBlockHour = timeBlock.attr("id");
      var textArea = timeBlock.find(".description");
      var text = textArea.val();
      localStorage.setItem(timeBlockHour, text);
    });

  var currentHour = dayjs().hour();
  var timeBlocks = $(".time-block");
  timeBlocks.each(function() {
  var timeBlockHour = parseInt($(this).attr("id"));
    if (currentHour > timeBlockHour) {
      $(this).addClass("past").removeClass("present future");
    } else if (currentHour < timeBlockHour) {
      $(this).addClass("future").removeClass("present past");
    } else {
      $(this).addClass("present").removeClass("past future");
    }
  });


  function loadSavedData() {
    var timeBlocks = $(".time-block");
    timeBlocks.each(function() {
      var timeBlockHour = $(this).attr("id");
      var savedText = localStorage.getItem(timeBlockHour);
      if (savedText) {
        $(this).find(".description").val(savedText);
      }
    });
  }
  loadSavedData();

  function updateTime() {
    var today = dayjs();
    $("#currentDay").text(today.format("dddd, MMMM D, YYYY, HH:mm:ss"));
  }
  setInterval(updateTime, 1000);  
});

var span = document.getElementById('span');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);

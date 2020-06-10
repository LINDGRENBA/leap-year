// User interface logic
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    let year = parseInt($("input#year").val());
    let result = leapYear(year);
    $("#result").text(result);
  });
});

// Buisness logic

function leapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
} 
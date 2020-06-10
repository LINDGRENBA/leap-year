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
  return false;
}
$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#numnumberUserTxt").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});

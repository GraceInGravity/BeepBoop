var beepBoop = function(numberUserTxt){
  var countingUp = [];
  for (var i = 0; i < numberUserTxt; i++) {
    countingUp.push(i);
    console.log(i);
    console.log(countingUp);
  }

  return countingUp;
};

$(document).ready(function() {

  $("form#beep-boop").submit(function(event) {
    event.preventDefault();

    var numberUserTxt = parseInt($("input#numberUserTxt").val());
      console.log(numberUserTxt);

    var result = beepBoop(numberUserTxt);
    $("#result").text(result);
      console.log(result);
      console.log(beepBoop);
  });
});

        // function beepBoop to count up to numberUserTxt
var beepBoop = function(numberUserTxt){
  var countingUp = [];
  for (var i = 0; i < numberUserTxt + 1; i++) {
    countingUp.push(i);
    console.log(i);
    console.log("counting up = " + countingUp);
  }
  return countingUp;
};

var dave = function(result){
  for (var i = 0; i < result.length; i++) {
    if (i=3) {
      result[i]="Sorry Dave I can't do that.";
      console.log(result);
    }
      console.log("This is final result from dave" + result);
    return result;
  }
}


$(document).ready(function() {

  $("form#beep-boop").submit(function(event) {
    event.preventDefault();

    var numberUserTxt = parseInt($("input#numberUserTxt").val());
      console.log(numberUserTxt);

    var result = beepBoop(numberUserTxt);
    $("#result").text(result);
      console.log("result = " + result);

    var nextResultDave = [];
    nextResultDave = dave(result);
    // $(#nextResultDave).text(nextResultDave);
    console.log("nextResultDave = " + nextResultDave);

  });



});

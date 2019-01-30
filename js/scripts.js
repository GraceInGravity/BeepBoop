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


    // Plan to make each number into an array and test each digit in a loop
var dave = function(result){
  for (var i = 0; i < result.length; i++) {
      // Get i to recognize over 9 as a differnt choice.
    if (i>=9) {
      // console.log("Start the split for over 9");
      individualLetters = [];
      result[i] = result[i].toString();
      console.log(result[i])
      individualLetters = result[i].split("");
      console.log(individualLetters);

      for(var j=0;j<=individualLetters.length-1;j++) {

        if (individualLetters[j] === "3"){
          result[i] = "Sorry Dave, I can't do that!";
          j=individualLetters.length + 2;
        }

        if (individualLetters[j] === "2"){
          result[i] = "BOOP!";
          j=individualLetters.length + 2;
        }

        if (individualLetters[j] === "1"){
          result[i] = "BEEP";
          j=individualLetters.length + 2;
        }
      }
    }
    if (i==3) {
      result[i]="Sorry Dave I can't do that.";
      console.log(result);
    }
    if (i==2) {
      result[i]="BOOP";
    }
    if (i==1) {
      result[i]="BEEP";
    }
  }
      console.log("This is final result from dave" + result);
    return result;
  }

$(document).ready(function() {
  $("form#beep-boop").submit(function(event) {
    event.preventDefault();
    var numberUserTxt = parseInt($("input#numberUserTxt").val());
    console.log(numberUserTxt);
    var result = beepBoop(numberUserTxt);
    var nextResultDave = [];
    nextResultDave = dave(result);
    $("#result").text(nextResultDave);
      // console.log("result = " + result);
    console.log("nextResultDave = " + nextResultDave);
  });
});

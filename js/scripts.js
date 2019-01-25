var beepBoop = function(numberUserTxt){
  return numberUserTxt + 200;
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

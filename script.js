$(document).ready(function(){
  $("#radio1").click(function(){
  $("#beeldHorentje").show();
  });
  $("#radio2").click(function(){
    $("#beeldHorentje").hide();
  });
  $("#btn1").click(function(){
    $("#beeldHorentje").hide();
  });
  $("#radio2").click(function(){
    $("#beeldPotje").show();
  });
  $("#radio1").click(function(){
    $("#beeldPotje").hide();
  });
  $("#btn1").click(function(){
    $("#beeldPotje").hide();
  });
});

$("#check1").click(() => {
  if ($(this).is(":checked")) {
    $("#chocoInput").toggle();
  } else {
    $("#chocoInput").toggle();
  }
});

$("#check2").click(() => {
  if ($(this).is(":checked")) {
    $("#vanilleInput").toggle();
  } else {
    $("#vanilleInput").toggle();
  }
});

$("#check3").click(() => {
  if ($(this).is(":checked")) {
    $("#aardbeiInput").toggle();
  } else {
    $("#aardbeiInput").toggle();
  }
});

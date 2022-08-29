$(document).ready(function () {
  $("#radio1").click(function () {
    $("#beeldHorentje").show();
    $("#beeldPotje").hide();
  });
  $("#radio2").click(function () {
    $("#beeldHorentje").hide();
    $("#beeldPotje").show();
  });

  $("#btn1").click(function () {
    $("#check1, #check2, #check3").checked = false;
    $("#beeldHorentje, #beeldPotje, #chocoInput, #vanilleInput, #aardbeiInput").hide();
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

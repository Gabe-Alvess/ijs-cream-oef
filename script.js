$(document).ready(function () {
  $("#radio1").click(() => {
    $("#beeldHorentje").show();
    $("#beeldPotje").hide();
  });
  $("#radio2").click(() => {
    $("#beeldHorentje").hide();
    $("#beeldPotje").show();
  });

  $("#btn1").click(() => {
    $("#check1, #check2, #check3").checked = false;
    $(
      ".aantal, #beeldHorentje, #beeldPotje, #chocoInput, #vanilleInput, #aardbeiInput"
    ).hide();
  });
});

$("#check1").click(() => {
  $(this).is(":checked")
    ? $("#chocoInput").show()($("#aantalChoco").show())
    : $("#chocoInput").toggle()($("#aantalChoco").toggle());
});

$("#check2").click(() => {
  $(this).is(":checked")
    ? $("#vanilleInput").show()($("#aantalVanille").show())
    : $("#vanilleInput").toggle()($("#aantalVanille").toggle());
});

$("#check3").click(() => {
  $(this).is(":checked")
    ? $("#aardbeiInput").show()($("#aantalAardbei").show())
    : $("#aardbeiInput").toggle()($("#aantalAardbei").toggle());
});

function smaakWeergave() {
  let valueChoco = Number(document.getElementById("chocoInput").value);
  let valueVanille = Number(document.getElementById("vanilleInput").value);
  let valueAardbei = Number(document.getElementById("aardbeiInput").value);
  let sum = valueChoco + valueVanille + valueAardbei;
  let aantalChoco; let aantalVanille; let aantalAardbei; let totaalAantaal;

  valueChoco > 1
    ? (aantalChoco = "bolletjes"): valueChoco == 1
    ? (aantalChoco = "bolletje"): aantalChoco = "bolletje"

  valueVanille > 1 
    ? (aantalVanille = "bolletjes"): valueVanille == 1
    ?(aantalVanille = "bolletje"): aantalVanille = "bolletje"
  

  if (valueAardbei > 1) {
    aantalAardbei = "bolletjes";
  } else if (valueAardbei == 1) {
    aantalAardbei = "bolletje";
  } else {
    aantalAardbei = "bolletje";
  }

  sum > 1
    ? (totaalAantaal = "bolletjes") :( totaalAantaal = "bolletje");

  {[( valueChoco == 0), (valueVanille == 0), (valueAardbei == 0)] }
  (valueChoco == 0)
    ? document.querySelector("#h1").classList.add("disapear") : document.querySelector("#h1").classList.add("intro");

  document.getElementById("h1").innerHTML =
    "Je hebt " + valueChoco + " " + aantalChoco + " chocolade ijs gekozen.";

  document.getElementById("h2").innerHTML =
    "Je hebt " + valueVanille + " " + aantalVanille + " vanille ijs gekozen.";

  document.getElementById("h3").innerHTML =
    "Je hebt " + valueAardbei + " " + aantalAardbei + " aardbei ijs gekozen.";

  document.getElementById("h4").innerHTML =
    "Je hebt in totaal " + sum + " " + totaalAantaal + " ijs gekozen.";
}

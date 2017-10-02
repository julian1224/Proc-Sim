// start script

// get vars by id
var flying, uphill;
// def //
var def1, def2, def3, def4, def5, def6;
// atk //
var atk1, atk2, atk3, atk4, atk5, atk6;
//
var atkInv = [], defInv = [];
// vars for item objects
var abbysalBlade = {atkMathType:"bash", atkValue:"0.25", defMathType:"block", defvalue:"0.5"};
var heavensHalberd = {atkMathType:"debuff", atkValue:"0.35", defMathType:"evasion", defValue:"0.25"};
var butterfly = {defMathType:"evasion", defValue:"0.35"};
var solarCrest = {defMathType:"evasion", defValue:"0.2"};
var talismanOfEvasion = {defMathType:"evasion", defValue:"0.2"};
var stoutShield = {defMathType:"block", defValue: "0.5"};
var poorMansShield = {defMathType:"block", defValue:"0.5"};
var vanguard = {defMathType:"block", defValue: "0.5"};
var bloodthorn = {atkMathType:"crit", atkValue:"0.2"};
var crystalys = {atkMathType:"crit", atkValue:"0.2"};
var daedalus = {atkMathType: "crit", atkValue:"0.3"};
var javelin = {atkMathType: "damage", atkValue:"0.25"};
var maelstrom = {atkMathType: "chain", atkValue:"0.25"};
var mjollnir = {atkMathType: "chain", atkValue:"0.25"};
var monkeyKingBar = {atkMathType:"minibash", atkValue:"0.35", trueStrike: true};
var sange = {atkMathType:"debuff", atkValue:"0.3"};
var sangeAndYasha = {atkMathType:"debuff", atkValue:"0.4"};
var skullBasher = {atkMathType:"bash", atkValue:"0.25"};



function runSim() {
// set vars again on button press
  var flying, uphill;
  // def //
  var def1 = item1def.value; var def2 = item2def.value; var def3 = item3def.value;
  var def4 = item4def.value; var def5 = item5def.value; var def6 = item6def.value;
  // atk //
  var atk1 = item1atk.value; var atk2 = item2atk.value; var atk3 = item3atk.value;
  var atk4 = item4atk.value; var atk5 = item5atk.value; var atk6 = item6atk.value;




  if (document.getElementById("amUphill").checked) {
    uphill = true;
  } else {
    uphill = false;
  }

  if (document.getElementById("amFlying").checked) {
    flying = true;
  } else {
    flying = false;
  }
for (i = 1; i < 7; i++){
  var atkInv = [];
  var defInv = [];
}

  document.getElementById("test").innerHTML = "Item 1 is " + def1 + " and " + atk1 + ".";
  document.getElementById("test2").innerHTML = "Flying is " + flying + " and uphill is " + uphill + ".";
  // deselect everything at the end
  for(i = 1; i < 7; i++) {
  document.getElementById("item" + i + "atk").selectedIndex = "0";

  document.getElementById("item" + i + "def").selectedIndex = "0";

              }
            }

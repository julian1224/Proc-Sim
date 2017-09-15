// start script

// get vars by id
var flying;
var uphill;
// def //
var def1;
var def2;
var def3;
var def4;
var def5;
var def6;
// atk //
var atk1;
var atk2;
var atk3;
var atk4;
var atk5;
var atk6;

// vars for items
function testButton() {
// set vars again on button press

  var flying =  amFlying.value;
  var uphill = amUphill.value;
  // def //
  var def1 = item1def.value;
  var def2 = item2def.value;
  var def3 = item3def.value;
  var def4 = item4def.value;
  var def5 = item5def.value;
  var def6 = item6def.value;
  // atk //
  var atk1 = item1atk.value;
  var atk2 = item2atk.value;
  var atk3 = item3atk.value;
  var atk4 = item4atk.value;
  var atk5 = item5atk.value;
  var atk6 = item6atk.value;

  document.getElementById("test").innerHTML = "Item 1 is " + def1 + " and " + atk1 + ".";
  document.getElementById("test2").innerHTML = "Flying is " + flying + " and uphill is " + uphill + ".";
  // deselect everything at the end
  for(i = 0; i < 6; i++) {
  document.getElementById('atk' + i).selectedIndex = "-1";

  document.getElementById('def' + i).selectedIndex = "-1";
              }
            }

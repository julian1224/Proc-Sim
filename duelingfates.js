// start script

// get vars by id
var flying, uphill;
// def //
var def1, def2, def3, def4, def5, def6;
// atk //
var atk1, atk2, atk3, atk4, atk5, atk6;

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
  for(i = 1; i < 7; i++) {
  document.getElementById("item" + i + "atk").selectedIndex = "-1";

  document.getElementById("item" + i + "def").selectedIndex = "-1";

              }
            }

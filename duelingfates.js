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

  var flying = document.getElementById("amUphill");
  var uphill = document.getElementById("amFlying");
  // def //
  var def1 = item1def.selectedIndex;
  var def2 = document.getElementById("item2def");
  var def3 = document.getElementById("item3def");
  var def4 = document.getElementById("item4def");
  var def5 = document.getElementById("item5def");
  var def6 = document.getElementById("item6def");
  // atk //
  var atk1 = document.getElementById("item1atk");
  var atk2 = document.getElementById("item2atk");
  var atk3 = document.getElementById("item3atk");
  var atk4 = document.getElementById("item4atk");
  var atk5 = document.getElementById("item5atk");
  var atk6 = document.getElementById("item6atk");


  document.getElementById("test").innerHTML = "Item 1 is " + def1 + " and " + atk1 + ".";

  // deselect everything at the end
  for(i = 0; i < 6; i++) {
  document.getElementById("atk" + i).selectedIndex = "-1";

  document.getElementById("def" + i).selectedIndex = "-1";
              }
}

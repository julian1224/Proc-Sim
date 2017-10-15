// start script


//camelize script
  camelize = function camelize(str) {
      return str.replace(/\W+(.)/g, function(match, chr)
       {
            return chr.toUpperCase();
        });
    }


function evasionCheck() {
  var arrayEvasionItems = [];
  var evasionMath;
// redefine for function

for(i=1; i<7; i++){
  currentItem = "def" + i;
  if (currentItem.defMathType == "evasion") {
    arrayEvasionItems.push(currentItem);
    console.log("pushed to array");

  }
}
// loop to check all def items
  for (i=0; i < arrayEvasionItems.length; i++){
// construct math

  }

}

//start runsim

function runSim() {
// set vars again on button press
var def1 = camelize(item1def.value); var def2 = camelize(item2def.value); var def3 = camelize(item3def.value);
var def4 = camelize(item4def.value); var def5 = camelize(item5def.value); var def6 = camelize(item6def.value);
// atk //
var atk1 = camelize(item1atk.value); var atk2 = camelize(item2atk.value); var atk3 = camelize(item3atk.value);
var atk4 = camelize(item4atk.value); var atk5 = camelize(item5atk.value); var atk6 = camelize(item6atk.value);
// checkbox bools

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


// edit text for testing reasons
  document.getElementById("test").innerHTML = "Item 1 is " + item1def.value + " and " + item1atk.value + ".";
  document.getElementById("test2").innerHTML = "Flying is " + flying + " and uphill is " + uphill + ".";

 evasionCheck();
//
if (getHit == true) {
document.getElementById("consoleLine1").innerHTML = ">Defending side got hit!";
} else if (getHit == false) {
  document.getElementById("consoleLine1").innerHTML = ">Attacking side missed!";
} else {
  console.log("Huh?");
}
function getObject(propname)
{
  return window[propname]
}
console.log(atk1+": "+window[atk1]);
console.log(atk1+": "+getObject(atk1));
console.log(atk1+".value: "+getObject(atk1).value);
for(var all in window[atk1])
{
  console.log(all+":"+window[atk1][all])
}

  // deselect everything at the end
  for(i = 1; i < 7; i++) {
  document.getElementById("item" + i + "atk").selectedIndex = "0";

  document.getElementById("item" + i + "def").selectedIndex = "0";

              }

}

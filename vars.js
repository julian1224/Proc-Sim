
// get vars by id
// these are bools in particular
var flying, uphill, getHit;
// def //
var def1, def2, def3, def4, def5, def6;
// atk //
var atk1, atk2, atk3, atk4, atk5, atk6;
//
var atkInv = [], defInv = [];
// vars for item objects

var AbbysalBlade = {atkMathType:"bash", atkValue:"0.25", defMathType:"block", defvalue:"0.5"};
var HeavenSHalberd = {atkMathType:"debuff", atkValue:"0.35", defMathType:"evasion", defValue:"0.25"};
var Butterfly = {defMathType:"evasion", defValue:"0.35"};
var SolarCrest = {defMathType:"evasion", defValue:"0.2"};
var TalismanOfEvasion = {defMathType:"evasion", defValue:"0.2"};
var StoutShield = {defMathType:"block", defValue: "0.5"};
var PoorManSShield = {defMathType:"block", defValue:"0.5"};
var Vanguard = {defMathType:"block", defValue: "0.5"};
var Bloodthorn = {atkMathType:"crit", atkValue:"0.2"};
var Crystalys = {atkMathType:"crit", atkValue:"0.2"};
var Daedalus = {atkMathType: "crit", atkValue:"0.3"};
var Javelin = {atkMathType: "damage", atkValue:"0.25"};
var Maelstrom = {atkMathType: "chain", atkValue:"0.25"};
var Mjollnir = {atkMathType: "chain", atkValue:"0.25"};
var MonkeyKingBar = {atkMathType:"minibash", atkValue:"0.35", trueStrike: true};
var Sange = {atkMathType:"debuff", atkValue:"0.3"};
var SangeAndYasha = {atkMathType:"debuff", atkValue:"0.4"};
var SkullBasher = {atkMathType:"bash", atkValue:"0.25"};

var items={
  " AbbysalBlade" : {atkMathType:"bash", atkValue:"0.25", defMathType:"block", defvalue:"0.5"};

} ;
for(var i=1;i<=6;i++)
{
   var object_name=items[window["def"+i]];
}
var t="AbbysalBlade";
item.AbbysalBlade = item[t];
for(var item_name in items)
{
  console.log(item_name);
  console.log("bevat:");
  if(typeof(items[item_name]["atkValue"])!="undefined")
  {
    // attack item

  }else {
   // defense item
  }
  for(var prop_name in items[item_name])
  {
    var prop_value=items[all_items][prop_name];
  }
}

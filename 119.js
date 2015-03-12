function createTRG(){
var d=ports[portid][6].split(" ");
var pv=["on","off"];
clearMenu();
addMenuItem("label","helpitem",TRG_HI);
addMenuItem("label","titleitem","Condition:");
var e=cIF("none","readonly",ports[portid][0]);
SA(e,"readonly","");
addMenuItem("condwhen","menuitem","Port A",e);
addMenuItem("label","menuitem","Operation",cSF("condition",d[0],trgtypes,trgtypes_desc),null);
addMenuItem("condgrp","menuitem","Port B ",cSF("inport",d[1],getPortListByType([])));
addMenuItem("label","titleitem","Action:");
addMenuItem("label","menuitem","Update port",cSF("port",d[2],getPortListByType([])),null);
addMenuItem("label","menuitem","with value",cSF("portvalue",d[3],pv),null);
addToolbarSaveCancelHelp(function(){
var cmd="trg+"+ports[portid][0]+"+"+ID("condition").value+"+"+ID("inport").value+"+"+ID("port").value+"+"+ID("portvalue").value;
var resp=send_command(cmd);
loadPortsInfo(ports[portid][0]);
displayPortDetails(portid);
},function(){displayPortDetails(portid);},"trg");
}


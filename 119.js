function createTRG(){
	var d=ports[portid][6].split(" ");
	var pv=["on","off"];
	clearMenu();
	addMenuItem("label","helpitem",TRG_HI);
	addMenuItem("label","titleitem",LBL_COND);
	var e=cIF("none","readonly",ports[portid][0]);
	SA(e,"readonly","");
	addMenuItem("condwhen","menuitem",LBL_PA,e);
	addMenuItem("label","menuitem",LBL_OP,cSF("condition",d[0],trgtypes,trgtypes_desc),null);
	addMenuItem("condgrp","menuitem",LBL_PB,cSF("inport",d[1],getPortListByType([])));
	addMenuItem("label","titleitem",LBL_ACT);
	addMenuItem("label","menuitem",LBL_UPDP,cSF("port",d[2],getPortListByType([])),null);
	addMenuItem("label","menuitem",LBL_WVAL,cSF("portvalue",d[3],pv),null);
	addToolbarSaveCancelHelp(function(){
		var cmd="trg+"+ports[portid][0]+"+"+ID("condition").value+"+"+ID("inport").value+"+"+ID("port").value+"+"+ID("portvalue").value;
		var resp=send_command(cmd);
		loadPortsInfo(ports[portid][0]);
		displayPortDetails(portid);
	},function(){
		displayPortDetails(portid);
	},"trg");
}
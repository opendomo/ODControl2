function createGRP(){
	try{
		clearMenu();
		var a=ports[portid][6].split(" ");
		addMenuItem("label","helpitem",GRP_HI);
		addMenuItem("grp","menuitem",LBL_PA,cSF("inport",a[0],getPortListByType([])));
		addMenuItem("grp","menuitem",LBL_OP,cSF("type",a[2],grptypes,grptypes_desc));
		addMenuItem("grp","menuitem",LBL_PB,cSF("outport",a[1],getPortListByType([])));
		addToolbarSaveCancelHelp(function() {
			var pr=ports[portid][0];
			var pa=document.getElementById("inport");
			var pb=document.getElementById("outport");
			var grpt=document.getElementById("type");
			command="grp+" + pr + "+" + pa.value + "+" + pb.value + "+" + grpt.value;
			var resp=send_command(command);
			if (resp.indexOf("DONE")==-1) {
				my_alert(ERR_GRP + resp);
			} else {
				loadPortsInfo(ports[portid][0]);
				displayPortDetails(portid);
			}
		},function(){displayPortDetails(portid);},"grp");
	} catch (e) {
		errorHandler(e);
	}
}


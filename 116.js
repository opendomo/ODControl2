function createDTG(){
	try{
		clearMenu();
		var p=ports[portid][6].split(" ");
		addMenuItem("label","helpitem",DTG_HI);
		var l=getPortListByType([]);
		addMenuItem("mnugrp", "menuitem", LBL_PORT, cSF("outport", p[1],l));
		l.unshift(["off"]);
		l.unshift(["on"]);
		addMenuItem("mnuval", "menuitem", LBL_VALUE,cSF("portval", p[2],l));
		addToolbarSaveCancelHelp(function() {
			var pr = ports[portid][0];
			var pa = document.getElementById("outport");
			var pv = document.getElementById("portval");
			command = "dtg+" + pr + "+vie220000+" + pa.value + "+" + pv.value;

			var resp = send_command(command);
			if (resp.indexOf("DONE")==-1) {
				my_alert(ERR_GRP+ resp);
			} else {
				my_alert(DTG_HI);	  
				loadPortsInfo(ports[portid][0]);
				displayPortDetails(portid);
			}  
		}, function(){displayPortDetails(portid);}, "dtg");
	} catch (e) {
		errorHandler(e);
	}  
} 

function createTTG(){
	try{
		clearMenu();
		var p=ports[portid][6].split(" ");
		addMenuItem("label","helpitem",TTG_HI);
		var l=getPortListByType([]);
		addMenuItem("mnugrp", "menuitem", "Port",cSF("outport", p[1], l));
		l.unshift(["off"]);
		l.unshift(["on"]);
		addMenuItem("mnuval", "menuitem", "Value",cSF("portval", p[2],l));
		addToolbarSaveCancelHelp(function() {
			var pr = ports[portid][0];
			var pa = document.getElementById("outport");
			var pv = document.getElementById("portval");
			var command="ttg+"+pr+"+20130101000000+"+pa.value+"+"+pv.value;
			var resp=send_command(command);
			if (resp.indexOf("DONE")==-1) {
				alert("Error creating the trigger: "+ resp);
			} else {
				alert("You can assign the proper date from the configuration panel");
				loadPortsInfo(ports[portid][0]);
				displayPortDetails(portid);
			}
		}, function(){displayPortDetails(portid);}, "ttg");
	} catch (e) {
		errorHandler(e);
	}
}


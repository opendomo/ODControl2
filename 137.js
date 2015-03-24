function loadLinksMenu_menu() {
	addToolbarSaveCancelHelp(function(){
		var dip = ID("inport");
		var dop = ID("outport");
		var lnkt = ID("type");
		for (var l=0;l<mylinks.length;l++) {
			if ((mylinks[l][0]==dip.value) && (mylinks[l][1]==dop.value)){
			   alert("Warning: ports " + dip.value + " and " + dop.value + " are already linked." + EOL + "This is a valid configuration for interlink ports, " + EOL + "but for other types the new link will overwrite the old one.");
			}
		}
		command = "lnk+" + dip.value + "+" + dop.value + "+" + lnkt.value;
		retval = send_command(command);
		if (retval.indexOf("DONE")!=-1) {
			alert("Link created");
			loadLinksInfo();
			setTimeout(function(){loadLinksMenu();},500);
		} else {
			alert("The link can not be created: "+retval);
		}
	}, loadMenu, "lnk");
}


function loadLinksMenu_menu() {
	addToolbarSaveCancelHelp(function(){
		var dip = ID("inport");
		var dop = ID("outport");
		var lnkt = ID("type");
		for (var l=0;l<mylinks.length;l++) {
			if ((mylinks[l][0]==dip.value) && (mylinks[l][1]==dop.value)){
			   alert(MSG_WARN + dip.value + " + " + dop.value + " " + MSG_LNKS);
			}
		}
		command = "lnk+" + dip.value + "+" + dop.value + "+" + lnkt.value;
		retval = send_command(command);
		if (retval.indexOf("DONE")!=-1) {
			my_alert(MSG_SAV);
			loadLinksInfo();
			setTimeout(function(){loadLinksMenu();},500);
		} else {
			my_alert(ERR_SAV+retval);
		}
	}, loadMenu, "lnk");
}


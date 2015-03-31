var pw="password",mi="menuitem";
function setUPass() {
	clearMenu();
	addMenuItem("sa",mi,MNU_UPAS,cIF("iu",pw,""));
	addMenuItem("sar",mi,MNU_RTP,cIF("iru",pw,""));
	addToolbarSaveCancelHelp(function() {
		var pass = ID("iu");
		var repeat = ID("iru");
		if (pass.value != repeat.value){my_alert(MSG_PDM); return;}
		command = "sec+webui+" + pass.value;
		var resp = send_command(command);
		if (resp.indexOf("DONE")==-1) {
			my_alert(ERR_SAV+resp);
		} else {
			my_alert(MSG_SAV);
			loadSecurity();
		}
	},loadSecurity);
}
function setCPass() {
	clearMenu();
	addMenuItem("sa",mi,MNU_CPAS,cIF("ia",pw,""));
	addMenuItem("sar",mi,MNU_RTP,cIF("ira",pw,""));
	addToolbarSaveCancelHelp(function() {
		var p=ID("ia");
		var r=ID("ira");
		if (p.value != r.value){my_alert(MSG_PDM); return;}
		command = "sec+webcf+"+p.value;
		var resp = send_command(command);
		if (resp.indexOf("DONE")==-1) {
			my_alert(ERR_SAV+resp);
		} else {
			my_alert(MSG_SAV);
			loadSecurity();
		}
	},loadSecurity);
}


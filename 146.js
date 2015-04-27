function setEKey() {
	try{
	var status = send_command("sec proto show");
	clearMenu();
	addMenuItem("sprot","menuitem",LBL_ENC,cCF("encrypted",status.indexOf("clear")==-1),null);
	addMenuItem("susrp","menuitem",LBL_ENK,cIF("inputproto", "password", ""));
	addMenuItem("susrr","menuitem",MNU_RTP,cIF("inputrepeatproto", "password", ""));

	addToolbarSaveCancelHelp(function() {
		var encrypted = ID("encrypted");
		var pass = ID("inputproto");
		var repeat = ID("inputrepeatproto");

		if(encrypted.value==false||encrypted.value=="false"){
			send_command("sec proto clear");
		}else{
			send_command("sec proto encrypted");
		}

		if(pass.value!=repeat.value) { my_alert(MSG_PDM); return;}
		if (pass.value == "" ) {my_alert(MSG_NOE); return;}
		command = "sec+passw+" + pass.value;
		var resp = send_command(command);
		if (resp.indexOf("DONE")==-1) {
			my_alert(ERR_SAV+ resp);
		} else {
			my_alert(MSG_SAV);
			loadSecurity();
		}
	}, loadSecurity);

	} catch (e) {
		errorHandler(e);
	}
}

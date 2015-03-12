function loadEncryptionPassword() {
	try{
		clearMenu();
		loadEncryptionPassword_menu();
		addToolbarSaveCancelHelp(function() {
			var encrypted = ID("encrypted");
			var pass = ID("inputproto");
			var repeat = ID("inputrepeatproto");

			if(encrypted.value==false||encrypted.value=="false"){
				send_command("sec proto clear");
			}else{
				send_command("sec proto encrypted");
			}

			if(pass.value!=repeat.value) {alert("Passwords don't match"); return;}
			if (pass.value == "" ) {alert("Password cannot be empty!"); return;}
			command = "sec+passw+" + pass.value;
			var resp = send_command(command);
			if (resp.indexOf("DONE")==-1) {
				alert("Error assigning password "+ resp);
			} else {
				alert("Password changed");
				loadSecurity();
			}
		}, loadSecurity);

	} catch (e) {
		errorHandler(e);
	}
}

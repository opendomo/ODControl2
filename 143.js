function loadODCConfiguratorPassword() {
	clearMenu();
   addMenuItem("secadmp", "menuitem", "ODC Configurator password",
         cIF("inputadmin", "password", ""));
   addMenuItem("secadmr", "menuitem", "Retype",
         cIF("inputrepeatadmin", "password", ""));
	addToolbarSaveCancelHelp(function() {
		var pass = ID("inputadmin");
		var repeat = ID("inputrepeatadmin");
		if (pass.value != repeat.value) {alert("Passwords don't match"); return;}
		command = "sec+webcf+" + pass.value;
		var resp = send_command(command);
		if (resp.indexOf("DONE")==-1) {
			alert("Error assigning password "+ resp);
		} else {
			alert("Password changed");
			loadSecurity();
		}
	}, loadSecurity);
}


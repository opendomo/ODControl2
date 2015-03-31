function loadEncryptionPassword_menu() {
	clearMenu();
	var status = send_command("sec proto show");

	addMenuItem("secproto","menuitem","Encrypted",
			cCF("encrypted",status.indexOf("clear")==-1),null);
	addMenuItem("secusrp", "menuitem", "Encryption password",
			cIF("inputproto", "password", ""));
	addMenuItem("secusrr", "menuitem", "Retype",
			cIF("inputrepeatproto", "password", ""));
}

function loadSecurity()
{	
	clearMenu();
   addMenuItem(0,"menuitem typeP","User password",null,setUPass);
   addMenuItem(1,"menuitem typeP","ODC Configurator password",null,setCPass);
   addMenuItem(2,"menuitem typeP","Communication protocol",null,loadEncryptionPassword);
	addToolbarSaveCancelHelp(null,loadMenu);
}


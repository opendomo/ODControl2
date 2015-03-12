function loadUserPassword() {
	clearMenu();
   addMenuItem("secusrp", "menuitem", "User password",
         cIF("inputuser", "password", ""));
   addMenuItem("secusrr", "menuitem", "Retype",
         cIF("inputrepeatuser", "password", ""));
   addToolbarSaveCancelHelp(function() {
   	var pass = ID("inputuser");
      var repeat = ID("inputrepeatuser");
      if (pass.value != repeat.value) {alert("Passwords don't match"); return;}
      command = "sec+webui+" + pass.value;
      var resp = send_command(command);
      if (resp.indexOf("DONE")==-1) {
         alert("Error assigning password "+ resp);
      } else {
         alert("Password changed");
         loadSecurity();
      }
   }, loadSecurity);
}


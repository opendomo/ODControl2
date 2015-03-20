function loadMenu(){
   context="";
   clearMenu();
   for (var i=0;i<mainMenu.length;i++){
      addMenuItem(mainMenu[i].id, "menuitem", mainMenu[i].name, null, mainMenu[i].callback);
   }
}

function loadConsole(){
	clearMenu();
	cmd = cIF("command","text","",null);
	cmd.onkeyup = function(e) {
		if (e.keyCode == 13) {
			var c = ID("command");
			var t = ID("tacmd");
			var resp = send_command(c.value);
			t.value=resp;
			c.value="";
			console.log(resp);
		}
	};
	addMenuItem("cmd","menuitem", LBL_EXE, cmd);

	var ta= document.createElement("textarea");
	ta.setAttribute("class", "tpl");
	ta.setAttribute("id","tacmd");
	ta.setAttribute("resize","none");
	ta.setAttribute("readonly","");
	ta.appendChild(document.createTextNode(""));
	addMenuItem("startsess","menuitem","",ta,null);
	addToolbarSaveCancelHelp(null,loadMenu);
	ID("command").focus();
}

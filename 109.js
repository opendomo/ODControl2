function loadMenu(){
	try{
		clearInterval(it);
		context="";
		clearMenu();
		for (var i=0;i<mainMenu.length;i++){
			addMenuItem(mainMenu[i].id, "menuitem", mainMenu[i].name, null, mainMenu[i].callback);
		}
	}catch(e){
		RL();
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
	var ta= CE("textarea","tpl","tacmd");
	ta.setAttribute("resize","none");
	ta.appendChild(CT(""));
	addMenuItem("startsess","menuitem","",ta,null);
	addToolbarSaveCancelHelp(null,loadMenu);
	ID("command").focus();
}

function loadTemplate(tpl){
	try {
		if (typeof tpl == "number") tpl = templates_cmd[tpl];
		cmds=tpl.replace(EOL,";;").split(";;");
		var total=cmds.length;
		clearMenu();
		addMenuItem("progressmenu","menuitem","Loading template",null);
		addMenuItem("progressbarm","menuitem","",createProgressField("progress",0,total));

		addMenuItem("progresstotalm","menuitem","Total commands",
				cIF("progresstotal","text",total));
		addMenuItem("progresscurrentm","menuitem","Executed",
				cIF("progresscurrent","text","0"));
		addMenuItem("progresserrm","menuitem","Errors",
				cIF("progresserr","text","0"));

		var ta=CE("textarea");
		ta.setAttribute("id", "errlog");
		ta.setAttribute("class", "err");
		ta.setAttribute("resize","none");
		ta.setAttribute("readonly","");
		addMenuItem("progresserrlog","menuitem","Error log: ",ta,null);
	} catch (e) {
	}
	addToolbarSaveCancelHelp(null,loadTemplates);

	send_command("clr");
	curr_tpl_cmd=0;
	failedcommands=0;
	setTimeout(loadTemplateNextCommand,2000);
}



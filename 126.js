function loadTemplate(tpl){
	try {
		if (typeof tpl == "number") tpl = templates_cmd[tpl];
		cmds=tpl.replace(EOL,";;").split(";;");
		var total=cmds.length;
		clearMenu();
		addMenuItem("progressmenu","menuitem",LBL_LOAD,null);
		addMenuItem("progressbarm","menuitem","",createProgressField("progress",0,total));
		addMenuItem("progresstotalm","menuitem",LBL_TCM, cIF("progresstotal","text",total));
		addMenuItem("progresscurrentm","menuitem",LBL_EXE, cIF("progresscurrent","text","0"));
		addMenuItem("progresserrm","menuitem",LBL_ERR, cIF("progresserr","text","0"));

		var ta=CE("textarea");
		ta.setAttribute("id", "errlog");
		ta.setAttribute("class", "err");
		ta.setAttribute("resize","none");
		ta.setAttribute("readonly","");
		addMenuItem("progresserrlog","menuitem",LBL_LOG,ta,null);
	} catch (e) {
	}
	addToolbarSaveCancelHelp(null,loadTemplates);

	send_command("clr");
	curr_tpl_cmd=0;
	failedcommands=0;
	setTimeout(loadTemplateNextCommand,2000);
}



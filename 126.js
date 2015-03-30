function loadTemplate(tpl){
	try {
		var comm = tpl.commands;
		cmds=comm.replace(EOL,";;").split(";;");
		clearMenu();
		addMenuItem("tnam","menuitem",LBL_NAM+": ",CT(tpl.name));
		addMenuItem("tdesc","menuitem",LBL_DESC+": ",CT(tpl.desc));
	} catch (e) {
	}
	addToolbarSaveCancelHelp(function(){
		var total=cmds.length;
		send_command("clr");
		addMenuItem("progressmenu","menuitem",LBL_LOAD,null);
		addMenuItem("progressbarm","menuitem","",createProgressField("progress",0,total));
		addMenuItem("progresstotalm","menuitem",LBL_TCM, cIF("progresstotal","text",total));
		addMenuItem("progresscurrentm","menuitem",LBL_EXE, cIF("progresscurrent","text","0"));
		addMenuItem("progresserrm","menuitem",LBL_ERR, cIF("progresserr","text","0"));
		var ta=CE("textarea","err","errlog");
		ta.setAttribute("resize","none");
		ta.setAttribute("readonly","");
		addMenuItem("progresserrlog","menuitem",LBL_LOG,ta,null);
		curr_tpl_cmd=0;
		failedcommands=0;
		setTimeout(loadTemplateNextCommand,2000);		
	},loadTemplates);
}
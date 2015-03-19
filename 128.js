function exportConfiguration() {
	var template=extractConfiguration();
	clearMenu();

	var initbutton= document.createElement("textarea");
	initbutton.setAttribute("class", "tpl");
	initbutton.setAttribute("resize","none");
	initbutton.setAttribute("readonly","");
	initbutton.appendChild(document.createTextNode(template));
	addMenuItem("startsess","menuitem",LBL_CFG,initbutton,null);
	addMenuItem("startsess","titleitem",TXT_EXP,null,null);
	addToolbarSaveCancelHelp(null,loadMenu);
}


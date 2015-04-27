function loadSecurity(){	
	clearMenu();
	addMenuItem(0,"menuitem typeP",MNU_UPAS,null,setUPass);
	addMenuItem(1,"menuitem typeP",MNU_CPAS,null,setCPass);
	addMenuItem(2,"menuitem typeP",MNU_PRO,null,setEKey);
	addToolbarSaveCancelHelp(null,loadMenu);
}
function dpd_init(id){
	clearMenu();
	var e=cIF("portname","text",ports[id][0],"[a-zA-Z0-9]{5}");
	SA(e,"maxlength",5);
	addMenuItem("fpn","menuitem",LBL_PNM,e,null);

	var en=cCF("enabled",isenabled(id));
	addMenuItem("fen","menuitem",LBL_ENA, en, null);
	if(!isvirtual(id))ID("fen").style.display="none";
	
	if(isenabled(id)){
		addMenuItem("fvis","menuitem",LBL_VIS,cCF("visible",isvisible(id)),null);
		addMenuItem("fset","menuitem",LBL_SCO,cCF("inconfig",isinconfig(id)),null);
		addMenuItem("ftag","menuitem",LBL_TAG,cSF("tag",ports[id][2],tags,tags_desc),null);
	}
}


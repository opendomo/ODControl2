function loadSecurity(){	
	clearMenu();
	addMenuItem(0,"menuitem typeP",MNU_UPAS,null,setUPass);
	addMenuItem(1,"menuitem typeP",MNU_CPAS,null,setCPass);
	addMenuItem(2,"menuitem typeP",MNU_PRO,null,setEKey);
	addToolbarSaveCancelHelp(null,loadMenu);
}


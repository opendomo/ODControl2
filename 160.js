function init(){
	var h=ID("adv");
	if(!h){
		ID("h").innerHTML="";
		TB('hme','Home','HME');
		TB('cfg','Settings','CFG');
		TB('adv','Configure','ADV');
		SA(ID("h"),"class","adv");
	}	
	mainMenu = [
		{id:"mnuconfp", name:MNU_CFP, callback:loadPortsMenu},
		{id:"mnucfgln", name:MNU_CFL, callback:loadLinksMenu},
		{id:"mnunetcf", name:MNU_NET, callback:loadNetworkConfig},
		{id:"mnucname", name:MNU_NAM, callback:changeODControlName},
		{id:"mnucname", name:MNU_TIM, callback:changeTime},
		{id:"mnusecop", name:MNU_SEC, callback:loadSecurity},
		{id:"mnureset", name:MNU_CLR, callback:clearConfiguration},
		{id:"mnutempl", name:MNU_LTM, callback:loadTemplates},
		{id:"mnuloadt", name:MNU_LCONF, callback:loadConfiguration},
		{id:"mnusavet", name:MNU_EXC, callback:exportConfiguration},
		{id:"mnuconsl", name:MNU_CON, callback:loadConsole}
	];
	loadODControlData();
	loadMenu();
	document.body.className="";
}
setTimeout(init,500);

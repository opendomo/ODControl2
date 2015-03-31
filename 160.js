var mainMenu = [
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
setTimeout(loadMenu,500);

var mainMenu = [
   {id:"mnuconfp", name:"Configure ports", callback: loadPortsMenu},
   {id:"mnucfgln", name:"Configure links", callback: loadLinksMenu},
   {id:"mnunetcf", name:"Network configuration", callback: loadNetworkConfig},
   {id:"mnucname", name:"Change ODControl name", callback:changeODControlName},
   {id:"mnucname", name:"Time settings", callback:changeTime},
   {id:"mnusecop", name:"Security", callback:loadSecurity},
   {id:"mnureset", name:"Clear configuration", callback:clearConfiguration},
   {id:"mnutempl", name:"Load template", callback:loadTemplates},
   {id:"mnuloadt", name:"Load configuration", callback:loadConfiguration},
   {id:"mnusavet", name:"Export configuration",callback:exportConfiguration},
   {id:"mnuconsl", name:"Console", callback: loadConsole}
];
/*
var catSel="hme";
clearTimeout(it);
loadODControlData();
loadMenu();
var adv=ID("adv");
if(!adv){
	TB('hme2','Exit from ODC Configurator','HME2');
	TB('back','Go to main menu','loadMenu');
}
*/
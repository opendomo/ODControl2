function loadLinksMenu(port1,port2){
try{
context="links";
var p1=port1?port1:"";
var p2=port2?port2:"";
var rc="";
clearMenu();
addMenuItem("lnkinp","menuitem","Inport",cSF("inport",p1,getPortListByType(["DI","DO","AI","AO","SV","Rv","CV","DV","Dv","AV","Av"])));
addMenuItem("lnkout","menuitem","Outport",cSF("outport",p2,getPortListByType(["DO","AO","DV","TV","AV","Av"])));
addMenuItem("lnktyp","menuitem","Link type",cSF("type","d",lnktypes,lnktypes_desc));

if(mylinks.length>0)addMenuItem("lnkadd","menuitem","Links:",null,null);
for(var i=0;i<mylinks.length;i++){
	var ln=mylinks[i][2];
	for(var zz=0;zz<lnktypes.length;zz++){
		if(mylinks[i][2]==lnktypes[zz]){
			ln=lnktypes_desc[zz];
		}
	}
	rc=CE("input");
	SA(rc,"value","delete");
	SA(rc,"id",i);
	rc.onclick=function(){deleteLink(this.id);};SA(rc,"type","button");
	addMenuItem("mlnk"+i,"menuitem",mylinks[i][0]+" - "+mylinks[i][1]+" ("+ln+")",rc,null);
}

loadLinksMenu_menu();
}catch(e){errorHandler(e);}
}


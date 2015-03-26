function createSCH(){
	clearMenu();
	addMenuItem("label","helpitem",SCH_HI);
	var v=ports[portid][6].split(" ")[0];
	addMenuItem("cperport","menuitem","Type",cSF("scheduletype",v,["w","h"],[I_WEE,I_HOU]));
	addToolbarSaveCancelHelp(function (){
		send_command("sch+"+ ports[portid][0]+"+"+scheduletype.value);
		loadPortsInfo(ports[portid][0]);
		displayPortDetails(portid);
	},function(){displayPortDetails(portid);},"sch");
}  
function changeODControlName(){
	clearMenu();
	addMenuItem("setodcname","menuitem", LBL_CHNAME,
			cIF("ODControlName","text",odcontrolname,"[a-z0-9]{5}"));
	addToolbarSaveCancelHelp(setODControlName,loadMenu);
}
function setODControlName(){
	var a = ID("ODControlName");
	var name = a.value;
	if (name && (name.length==5)) {
		var resp = send_command("snm+" + name);
		if (resp.indexOf("DONE")==-1) {
			my_alert(TXT_INVNAME);
		} else {
			my_alert(TXT_OKNAME);
			odcontrolname = name;
			loadMenu();
		}
	}else{
		my_alert(TXT_INVNAME);
	}
}

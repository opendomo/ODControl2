function createSCH(){
	clearMenu();
	addMenuItem("label","helpitem",SCH_HI);
	var v=ports[portid][6].split(" ")[0];
	addMenuItem("cperport","menuitem","Type",cSF("scheduletype",v,["w","h"],["Weekday","Hourly"]));
	addToolbarSaveCancelHelp(function (){
		send_command("sch+"+ ports[portid][0]+"+"+scheduletype.value);
		loadPortsInfo(ports[portid][0]);
		displayPortDetails(portid);
	},function(){displayPortDetails(portid);},"sch");
}  
function changeODControlName(){
	clearMenu();
	addMenuItem("setodcname","menuitem", "Change name",
			cIF("ODControlName","text",odcontrolname,"[a-z0-9]{5}"));
	addToolbarSaveCancelHelp(setODControlName,loadMenu);
}
function setODControlName(){
	var a = ID("ODControlName");
	var name = a.value;
	if (name && (name.length==5)) {
		var resp = send_command("snm+" + name);
		if (resp.indexOf("DONE")==-1) {
			alert(TXT_INVNAME);
		} else {
			alert("Name changed");
			odcontrolname = name;
			loadMenu();
		}
	}else{
		alert(TXT_INVNAME);
	}
}

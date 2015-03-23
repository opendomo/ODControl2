function createRPT(){
		clearMenu();
		var c=0;
		var rdv=[];
		for(var i=0; i < ports.length; i++)
			if (ports[i][1]=="Rv"){c++;rdv.push(ports[i][0]);}
		if(c==0){
			addMenuItem("label","warnitem",RDV_WI);
			addToolbarSaveCancelHelp(null,
				function(){displayPortDetails(portid);});
			return;
		}
		var a=ports[portid][6].split(" ");
		var r=/[a-zA-Z0-9]{5}/g;
		if(!r.test(a[1]) || typeof something === "undefined") 
			rpn="do000";
		addMenuItem("label","helpitem",RPT_HI);
		addMenuItem("remdev","menuitem",LBL_REMD, cSF("odcontrol",a[0],rdv,rdv));
		addMenuItem("remport","menuitem",LBL_REMP, cIF("inport","text",a[1]));
		addToolbarSaveCancelHelp(function (){
			var pr=ports[portid][0];
			var od=ID("odcontrol");
			var pa=ID("inport");
			var resp=send_command("rpt+" + pr + "+" + od.value + "+"+ pa.value);
			if(resp.indexOf("DONE")==-1){n(resp);}else{
				loadPortsInfo(ports[portid][0]);
				displayPortDetails(portid);
			}
		},function(){displayPortDetails(portid);},"rpt");
}
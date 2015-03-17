function changeTime()
{
	clearMenu();
	var dte=send_command("dte+show").split(" ");
	var sel="";
	var dsp=""
	try {
		if(parseInt(dte[7].split(":")[1])==1){
			dsp='none'; 
			sel="Network Server (NTP)";
		}else{
			dsp='block'; 
			sel="Internal date";
		}
	} catch(e) {}
	var x=cSF("datetype",sel,["Network Server (NTP)","Internal date"]);
	addMenuItem("dtp","menuitem", "Date type", x);
	var dx=cIF("datein", "text", dteToStr(dte));
	addMenuItem("dateinput","menuitem", "New date:", dx);
	var dateinput=ID("dateinput");
	dateinput.style.display=dsp; 

	addMenuItem("dtx","menuitem", null, null);
	var intv=setIntervalRefreshDate("dtx");
	var idx=0;
	x.onchange = function(e) {
		var v=ID("datetype");
		idx=v.selectedIndex;
		if(idx==0) { dateinput.style.display='none'; }
		else { dateinput.style.display='block'; }
	};
	addToolbarSaveCancelHelp(function(){
		var r=true;
		if(idx==0) saveNTP();
		else r=saveDateTime(ID("datein").value);
		clearInterval(intv);
		if(r)loadMenu();
	},function(){
		loadMenu();
		clearInterval(intv);
	}, null);	
}



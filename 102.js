function changeTime(){
	clearMenu();
	var dte=send_command("dte+show").split(" ");
	var sel="";
	var dsp=""
	try {
		if(parseInt(dte[7].split(":")[1])==1){
			dsp='none'; 
			sel=LBL_NTPS;
		}else{
			dsp='block'; 
			sel=LBL_IDNTP;
		}
	} catch(e) {}
	var x=cSF("datetype",sel,[LBL_NTPS,LBL_IDNTP]);
	addMenuItem("dtp","menuitem", LBL_DTYPE, x);
	var dx=cIF("datein", "text", dteToStr(dte));
	addMenuItem("dateinput","menuitem", LBL_NEWD, dx);
	var dateinput=ID("dateinput");
	dateinput.style.display=dsp; 

	addMenuItem("dtx","menuitem", null, null);
	var intv=setIntervalRefreshDate("dtx");
	var idx=0;
	x.onchange = function(e) {
		var v=ID("datetype");
		idx=v.selectedIndex;
		if(idx==0){dateinput.style.display='none';}
		else{dateinput.style.display='block';}
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
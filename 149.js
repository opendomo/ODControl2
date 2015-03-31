function dpd_virtuals_1(id) {
	sel = id;
	var t = ports[id][5];
	var extdata = " (" + ports[id][6] + ")";
	addMenuItem("selZTG", 
		t=="ZTG"?"optionsel":"option", 
		t=="ZTG"?"Countdown" +extdata:"Countdown",	
		CT(extdata), createZTG);
	addMenuItem("selTRG", 
		t=="TRG"?"optionsel":"option", 
		t=="TRG"?"Condition" +extdata:"Conditional", 
		CT(extdata), createTRG);
	addMenuItem("selRDV", 
		t=="RDV"?"optionsel":"option", 
		t=="RDV"?"Remote device" +extdata:"Remote device", 
		CT(extdata), createRDV);
	addMenuItem("selRPT", 
		t=="RPT"?"optionsel":"option", 
		t=="RPT"?"Remote port" +extdata:"Remote port", 
		CT(extdata), createRPT);
	addMenuItem("selMDB", 
		t=="MDB"?"optionsel":"option", 
		t=="MDB"?"MDB port" +extdata:"Modbus port", 
		CT(extdata), createMDB);
	addMenuItem("selSCH", 
		t=="SCH"?"optionsel":"option", 
		t=="SCH"?"SCH" +extdata:"Scheduler", 
		CT(extdata), createSCH);
}


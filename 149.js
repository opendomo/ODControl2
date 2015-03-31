function dpd_virtuals_1(id) {
	sel = id;
	var t = ports[id][5];
	var extdata = CT(" (" + ports[id][6] + ")");
	addMenuItem("selZTG", 
		t=="ZTG"?"optionsel":"option", 
		MNU_ZTG,	
		t=="ZTG"?extdata:null, createZTG);
	addMenuItem("selTRG", 
		t=="TRG"?"optionsel":"option", 
		MNU_TRG, 
		t=="TRG"?extdata:null, createTRG);
	addMenuItem("selRDV", 
		t=="RDV"?"optionsel":"option", 
		MNU_RDV, 
		t=="RDV"?extdata:null, createRDV);
	addMenuItem("selRPT", 
		t=="RPT"?"optionsel":"option", 
		MNU_RPT, 
		t=="RPT"?extdata:null, createRPT);
	addMenuItem("selMDB", 
		t=="MDB"?"optionsel":"option", 
		MNU_MDB, 
		t=="MDB"?extdata:null, createMDB);
	addMenuItem("selSCH", 
		t=="SCH"?"optionsel":"option", 
		MNU_SCH, 
		t=="SCH"?extdata:null, createSCH);
}


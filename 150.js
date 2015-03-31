function dpd_virtuals_2(id) {
	sel = id;
	var t = ports[id][5]; // Type of the port?
	var extdata = " (" + ports[id][6] + ")";
	addMenuItem("selVAR",t=="VAR"?"optionsel":"option",
		"Variable",
		null,
		function(){createVP("var");});
	addMenuItem("selPER",t=="PER"?"optionsel":"option",
		t=="PER"?"Persistent "+ports[id][4]:"Persistent",
		null,
		function(){createVP("per");});
	addMenuItem("selGRP",
		t=="GRP"?"optionsel":"option",
		t=="GRP"?"Group" +extdata:"Group",
		null,
		createGRP);
	addMenuItem("selTTG",
		t=="TTG"?"optionsel":"option",
		t=="TTG"?"Time trigger" +extdata:"Time trigger",
		null,
		createTTG);
	addMenuItem("selDTG",
		t=="DTG"?"optionsel":"option",
		t=="DTG"?"Date trigger" +extdata:"Date trigger",
		null,
		createDTG);
	
}


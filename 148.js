function dpd_virtuals(id) {
	var s="optionsel", o="option";	
	var t = ports[id][5];
	var x = CT(" (" + ports[id][6] + ")");
	addMenuItem("selZTG",t=="ZTG"?s:o, MNU_ZTG, t=="ZTG"?x:null, createZTG);
	addMenuItem("selTRG",t=="TRG"?s:o, MNU_TRG, t=="TRG"?x:null, createTRG);
	addMenuItem("selRDV",t=="RDV"?s:o, MNU_RDV, t=="RDV"?x:null, createRDV);
	addMenuItem("selRPT",t=="RPT"?s:o, MNU_RPT, t=="RPT"?x:null, createRPT);
	addMenuItem("selMDB",t=="MDB"?s:o, MNU_MDB, t=="MDB"?x:null, createMDB);
	addMenuItem("selSCH",t=="SCH"?s:o, MNU_SCH, t=="SCH"?x:null, createSCH);
	addMenuItem("selVAR",t=="VAR"?s:o,MNU_VAR,t=="VAR"?x:null,function(){createVP("var");});
	addMenuItem("selPER",t=="PER"?s:o,MNU_PER,t=="PER"?x:null,function(){createVP("per");});
	addMenuItem("selGRP",t=="GRP"?s:o,MNU_GRP,t=="GRP"?x:null,createGRP);
	addMenuItem("selTTG",t=="TTG"?s:o,MNU_TTG,t=="TTG"?x:null,createTTG);
	addMenuItem("selDTG",t=="DTG"?s:o,MNU_DTG,t=="DTG"?x:null,createDTG);	
}


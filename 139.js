function extractConfiguration_switch(res, i, pType, pName, pPage){

	switch(pType){
		case "DI":
			res = res + "cfg " + pName + " di"+pPage+"\\n";
			break;
		case "DO":
			res = res + "cfg " + pName + " do"+pPage+"\\n";
			break;
		case "DX":
			res = res + "cfg " + pName + " x"+pPage+"\\n";
			break;
		case "AI":
			var rangevals = ports[i][5].split("|");
			res = res + "cfg " + pName + " "+ports[i][6] + pPage+"\\n";
			res = res + "rng " + pName + " " + rangevals[0] + " " + rangevals[1] + "\\n";
			break;
		case "AO":
			var rangevals = ports[i][5].split("|");
			res = res + "cfg " + pName + " "+ports[i][6]+pPage+"\\n";
			res = res + "rng " + pName + " " + rangevals[0] + " " + rangevals[1] + "\\n";
			break;
		case "VX":
			res = res + "cfg " + pName + " x"+pPage+"\\n";
			break;
		case "XV":
			break;
		default:
			res = res + "cfg " + pName + " d"+pPage+"\\n";
			res = res + vportExtractConfig(ports[i]);
			break;
	}

	return res;
}


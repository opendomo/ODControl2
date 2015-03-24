vportExtractConfig=function(vport){
var res="",cfg="",val="";
if(vport[5]&&(vport[0].indexOf("$")==-1)){
	if(vport[6]){
		val=vport[6].toLowerCase().replace(/[=|\|_]/g," ");
		cfg=vport[6].replace(/[=|\|_]/g," ");
	}
	 switch(vport[5]){
		case "VAR":
			res=res+"var "+vport[0]+" "+val+EOL;
			break;
		case "PER":
			res=res+"per "+vport[0]+" "+cfg+EOL;
			res=res+"set "+vport[0]+" "+val+EOL;
			break;
		case "GRP":
			res=res+"grp "+vport[0]+" "+cfg+EOL;
			break;
		case "TTG":
			res=res+"ttg "+vport[0]+" "+cfg+EOL;
			break;
		case "DTG":
			res=res+"dtg "+vport[0]+" "+cfg+EOL;
			break;
		case "ZTG":
			res=res+"ztg "+vport[0]+" "+cfg+EOL;
			break;
		case "TRG":
			res=res+"trg "+vport[0]+" "+cfg+EOL;
			break;
		case "RPT":
			res=res+"rpt "+vport[0]+" "+cfg+EOL;
			 break;
		case "RDV":
			res=res+"rdv "+vport[0]+" "+cfg+EOL;
			 break;
		case "MDB":
			res=res+"mdb "+vport[0]+" "+cfg+EOL;
			break;
		case "SCH":
			res=res+"sch "+vport[0]+" "+cfg+EOL;
	}
}

return res;
};

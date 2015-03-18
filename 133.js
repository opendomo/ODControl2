function loadPortsInfo(ptnm){
if(ptnm){
	id=getPortId(ptnm);
	if(id>=0){
		var cr=send_command("lsc+"+ptnm);
		if(cr!="DONE"){
			var pts=cr.replace(/\nDONE/g,"").split("\n");
			if(pts[0].indexOf(":")>0){
				var s=pts[0].split(":");
				var pn=s[0];
				var pf=s[1]?s[1]:"";
				var ptype=pf.substring(0,2);
				var ptag=pf.substring(3,4);
				var pval=s[2];
				var ptol=s[5];
				ports[id]=new Array(pn,pf.substring(0,2),pf.substring(3,4),pf,pval,s[3],s[4],ptol);
			}
		}
	}
	return true;
}
var cr=send_command("lsc+00-23;lsc+24-47;lsc+48-71;lsc+72-96");
if(cr.length<10){alert("Error loading ports");}
var pts=cr.split("\n");
var total=0;
ports=[];
for(var i=0;i<pts.length;i++){
	if(pts[i].indexOf(":")>0){
		var s=pts[i].split(":");
		var pn=s[0];
		var pf=s[1]?s[1]:"";
		var ptype=pf.substring(0,2);
		var ptag=pf.substring(3,4);
		var pval=s[2];
		var ptol=s[5];
		ports.push(new Array(pn,pf.substring(0,2),pf.substring(3,4),pf,pval,s[3],s[4],ptol));
		total++;
	}
}
return total;
}


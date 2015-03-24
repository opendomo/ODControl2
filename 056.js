function AM(t,n,v){
var l=ID(n), r, retval, rng, mn=0, mx=0;
if(l){
	retval=CT("");
}else{
	if (typeof window[t+"_ft"] == "function") {
		f =  window[t+"_ft"];
		l=f(t,n,v);
	}
	var a;
	switch(t){ 
	case "TV":
	case "AO": 
	case "AV":a=cAV(n,v);break;
	case "DO":
	case "DV":a=cDV(n,v);break;
	case "AI":a=cAI(n,v);break;
	case "Rv":
	case "Dv":
	case "DI":a=cDI(n,v);break;
	case "SV":a=cSV(n,v);break;
	case "WV":a=cWV(n,v);break;				
	case "CV":a=cCV(n,v);break;				
	default:  a=cDF(n,v);break;				
	}
	l=a[0];
	retval=a[1];
}
switch(t){ 
	case "SV":
		SA(l,"title",b[4]);SA(l,"value",b[2]);
		break;
	case "TV":
		var tx = b[4].split(" ");
		SA(l,"value",parseFloat(tx[1]));
		break;
	default:
		SA(l,"class",v);
}
return retval;
}
function SV(p,v){SC("set+"+p+"+"+v,n);}
var p=location.port;
if(p=="")p=80;
if(p==nport)HME();else ADV();
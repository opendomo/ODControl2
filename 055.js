function cAV(n,v){
   var r=CE("input","rng",n);
	try{rng = b[3].split("|");
		mn=parseFloat(isNaN(rng[0])?-100000:rng[0]);
		mx=parseFloat(isNaN(rng[1])?100000:rng[1]);
	}catch(e){mn=0,mx=100;}
	SA(r,"type","range"); 
	SA(r,"min",mn);
	SA(r,"max",mx);
	SA(r,"step",(mn==0&&mx==100)?"10":"0.5");
	r.onchange=function(e){
		SV(this.id,parseFloat(this.value).toFixed(4));
		ID("l_"+n).value=this.value;
	}; 
	var e=CE("input","ronum","l_"+n);
	SA(e,"type","number"); 
	SA(e,"readonly",""); 
	e.value=r.value;
	var l=CE("li","AO","li");
	AC(l,CT(n));
	AC(l,e);
	AC(l,r);
	return [r,l];
}
function cDV(n,v){
r=CE("a",v,n);
AC(r,CT(""));
r.onclick=function(e){
var v=(this.className=="ON")?"OFF":"ON";
SV(this.id,v);
SA(ID(this.id),"class",v);
};
l = M("li","DO",n,r);
return [r,l];
}
function cDI(n,v){
r=CE("a",v,n);
AC(r,CT(""));
l=M("li","DI",n,r);
return [r,l];
}
function cAI(n,v){
r=CE("input","txt",n); 
SA(r,"readonly","");
SA(r,"type","number");
AC(r,CT(v));
l=M("li","AI",n,r);
return [r,l];
}


var scheduleval=0;

function cSV(n,v){
r=CE("input",v,n); 
SA(r,"title",b[4]);
SA(r,"type","button");
r.onclick=showSCH;
AC(r,CT(v));
l=M("li","SV",n,r);
return [r,l]}

function showSCH(e){
var s=ID("schedule");
if(!s){s=CE("div","schedule","schedule");}
if(s.style.display!=""){s.style.display="";return;}
AC(this.parentNode,s);
s.innerHTML="";
var a=this.title;
var k=a.split(" ");
scheduleval=parseInt(k[1]);
var valor="000000000000000000000000"+parseInt(k[1]).toString(2);
switch(k[0]){
case "h":
	valor=valor.substr(-24);
	for (var i=0;i<24;i++){
		var d=CE("span",valor[23-i]=="1"?"selected":"unselected","h"+i);
		d=idh(i,d);
		AC(d,CT(i));
		AC(s,d);
	}			
break;
case "w":
	var wd=['su','mo','tu','we','th','fr','sa'];
	valor=valor.substr(-8);
	for (var i=0;i<7;i++){
		var d=CE("span",valor[7-i]=="1"?"selected":"unselected","d"+i);
		d=idw(i,d);
		AC(d,CT(wd[i]));
		AC(s,d);
	}		
break;			
}
s.style.display="block";
}

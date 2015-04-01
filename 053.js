function AJ(){return new XMLHttpRequest();}
function upd(){SC("lsc+hme",ci);}
function upc(){SC("lsc+cfg",ci);}
function M(i,c,t,r){
	var l=ID(t)?ID(t):CE("li",c,i);
	AC(l,CT(t));
	AC(l,r);
	return l;
}
function CT(t){return D.createTextNode(t);}
function SC(c,f){
	console.log(c);
	var x=AJ();
	x.open("GET",c.replace(/ /g,"+"));
	x.setRequestHeader("Cache-Control","no-cache,max-age=0");
	x.setRequestHeader("Pragma","no-cache");
	x.send(null);
	x.onload=f;
}
function V(c){return ID(c).value;}
function n(c){
	var r = c.srcElement.responseText;
	if(r.indexOf("DONE")==-1) console.log(r);
}
var a,b,t=0;
function ci(){
	var tx=this.responseText;
	if(tx=="E003"){
		if(t>3){alert(t);t=0;return;}
		SC(c, ci);t++;return;
	}
	t=0;
	var d=ID("b");
	a=tx.split(EOL);
	for(var i=0;i<a.length;i++){
		b=a[i].split(":");
		if(a[i]!="DONE")try{
			var k = AM(b[1].substring(0,2),b[0],b[2]);
			AC(d,k);
		}catch(e){}
	}
}
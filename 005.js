var cport=81,nport=80;function ns(c){
	var e = c.srcElement.responseText;
	var s=e.split(" ");
	for(var i=0;i<s.length;i++){
		var k=s[i].split(":");
		if(k&&k[0]=="webcfport"){
			cport=parseInt(k[1]);
		}
		if(k&&k[0]=="webuiport"){
			nport=parseInt(k[1]);}
	}
}
	
function sadv(){
	if (cport==nport) document.location="./adv"; 
	else document.location="http://"+document.location.hostname+":"+cport;
}
AC(ID('f'),CT("Version: "+ver+", UID: "+uid));SA(ID('f'),'href','http://opendomo.com');SC("net+show",ns);
var it;
function HME(){
var h=ID("adv");if(!h){ID("h").innerHTML="";
TB('hme','Home','HME');
TB('cfg','Settings','CFG');
TB('adv','Configure','sadv');
SA(ID("h"),"class","hme");
}
SEL("hme");
clearInterval(it);ID('b').innerHTML='';it=setInterval(upd,parseInt(1));clearInterval(it);upd();it=setInterval(upd,parseInt(localStorage['frequency']));
}
function CFG(){
SA(ID("h"),"class","cfg");clearInterval(it);ID('b').innerHTML='';it=setInterval(upc,parseInt(1));clearInterval(it);upc();it=setInterval(upc,parseInt(localStorage['frequency']));SEL("cfg");}
function ADV(){/*SEL("adv");*/SA(ID("h"),"class","hme");}
JS("006.js");

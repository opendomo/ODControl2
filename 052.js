var cport=0,nport=0;
function TB(i,l,f) {AC(ID('h'),CE('a','cat',i));AC(ID(i),CT(l));ID(i).href='javascript:'+f+'();';}
function RL(){D.location.reload();}
function ns(c){
	var e = c.srcElement?c.srcElement:c.target;
	var s=e.responseText.split(" ");
	for(var i=0;i<s.length;i++){
		var k=s[i].split(":");
		if(k&&k[0]=="webcfport"){
			cport=parseInt(k[1]);
		}
		if(k&&k[0]=="webuiport"){
			nport=parseInt(k[1]);}
	}
}
function ADV(){
	if (typeof loadMenu == "function"){
		SEL("adv");
		loadMenu();
	}else {
		if (cport==nport) document.location="./adv"; 
		else document.location="http://"+document.location.hostname+":"+cport;
	}
}
var it;
function HME(){
	SEL("hme");
	ID('b').innerHTML='';
	clearInterval(it);
	upd();
	it=setInterval(upd,5000);
}
function CFG(){
	SA(ID("h"),"class","cfg");
	ID('b').innerHTML='';	
	clearInterval(it);
	upc();
	it=setInterval(upc,5000);
	SEL("cfg");
}


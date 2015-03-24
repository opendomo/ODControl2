function G(tag){return D.getElementsByTagName(tag);}
function SA(n,a,v){n.setAttribute(a,v);return n;}
function AC(p,c){p.appendChild(c);}
function CE(t,c,i){var e=D.createElement(t); if(c&&c!='')SA(e,'class',c);if(i&&i!='')SA(e,'id',i); return e;}
function JS(n){var f=CE('script');SA(f,'type','text/javascript');SA(f,'src', n);AC(G('head')[0],f);}
function adv(){
	clearTimeout(it);
	loadODControlData();
	loadMenu();
}

window.onload=function(){
	SA(ID('f'),'href','http://opendomo.com');
	SC("net+show",ns);
	SC("ver",function(v){
		try {
			var p=v.target.responseText.split(" ");;
			odcontrolname = p[0];
			ver = p[2];
			uid = p[3];
			ID("f").innerHTML="v"+ver +" "+ uid;
		}catch(e){
			console.log("Error reading ODControl version");
		}
	});	
	var p=location.port;
	if(p=="")p=80;
	if(p==nport)HME();else ADV();	
}
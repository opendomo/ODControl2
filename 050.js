var D=document; 
var EOL=String.fromCharCode(10);
function ID(id){return D.getElementById(id);}
function show(x){x.style.display="block";}
function hide(x){x.style.display="none";}
function G(tag){return D.getElementsByTagName(tag);}
function SA(n,a,v){n.setAttribute(a,v);return n;}
function AC(p,c){p.appendChild(c);}
function CE(t,c,i){var e=D.createElement(t); if(c&&c!='')SA(e,'class',c);if(i&&i!='')SA(e,'id',i); return e;}
function JS(n){var f=CE('script');SA(f,'type','text/javascript');SA(f,'src', n);AC(G('head')[0],f);}
function CSS(n){var f=CE('link');SA(f,'rel','stylesheet');SA(f,'href', n);AC(G('head')[0],f);}
function RB(){SC("rel",HME);}
var catSel="hme";
function SEL(x){
	var e=document.querySelector("a#"+catSel);
	e.style.backgroundColor="#4F95EB";
	catSel=x;
	var e=document.querySelector("a#"+catSel);
	e.style.backgroundColor="#053f95";
}
for(var i=51;i<=65;i++)JS('0'+i+'.js');
for(var i=20;i<=29;i++)CSS('0'+i+'.css');

function G(tag){return D.getElementsByTagName(tag);}
function SA(n,a,v){n.setAttribute(a,v);return n;}
function AC(p,c){p.appendChild(c);}
function CE(t,c,i){var e=D.createElement(t); if(c&&c!='')SA(e,'class',c);if(i&&i!='')SA(e,'id',i); return e;}
function JS(n){var f=CE('script');SA(f,'type','text/javascript');SA(f,'src', n);AC(G('head')[0],f);}
if(localStorage["*"])eval(localStorage["*"]);else JS('002.js');

window.onload=function(){
JS('008.js');
JS("010.js");
};

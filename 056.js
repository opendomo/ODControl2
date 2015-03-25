function cCV(n,v){
var a=b[4].split(" ");
var an=[];
for(var i=1;i<32;i++)an.push(("0"+i).slice(-2));
an.push("**");
var rx=/^....(..)(..)(..)(..)(..)$/g;
var m=rx.exec(a[0]);
var r=CE("input","hour",n); 
SA(r,"type","text");
SA(r,"value",m[3]+":"+m[4]+":"+m[5]);
AC(r,CT(v));
var j=CE("input","save",n); 
SA(j,"type","button");
SA(j,"value","Save");
AC(j,CT(v));
var e=cSF(n,m[2],an);
SA(e,"class","day");
var s=cSF(n,m[1],["01","02","03","04","05","06","07","08","09","10","11","12","**"],["January","February","March","April","May","June","July","August","September","October","November","December","**"]);
SA(s,"class","month");
var l=ID(n);
if(!l)l=CE("li","AI","li");
AC(l,CT(n));
AC(l,j);
AC(l,r);
AC(l,s);
AC(l,e);
j.addEventListener("click",function(){
SC("set+"+n+"+****"+s.value+(("0"+e.value).slice(-2))+r.value.replace(/:/g,""),function(e){});
});
return [r,l];
}

window.onload=function(){

};
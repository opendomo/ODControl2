function cWV(n,v){
var a=b[4].split(" ");
var rx=/(...)(..)(..)(..)/g;
var m=rx.exec(a[0]);
var r=CE("input","txt",n); 
SA(r,"type","text");
SA(r,"class","hour");
SA(r,"value",m[2]+":"+m[3]+":"+m[4]);
AC(r,CT(v));
var j=CE("input","txt",n); 
SA(j,"type","button");
SA(j,"value","Save");
SA(j,"class","save");
AC(j,CT(v));
var s=cSF(n,m[1],["sun","mon","tue","wed","thu","fri","sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]);
SA(s,"class","wday");
AC(j,CT(v));
var l=ID(n);
if(!l)l=CE("li","AI","li");
AC(l,CT(n));
AC(l,j);
AC(l,r);
AC(l,s);
j.addEventListener("click",function(){
var day=s.value;
var hour=r.value.replace(/:/g,"");
SC("set+"+n+"+"+day+hour,function(e){});
});
return [r,l];
}

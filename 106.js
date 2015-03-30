function clearConfiguration(){
	my_confirm(MSG_CLR, "clrConf()");
}
function clrConf(){
	send_command('clr');
	setTimeout(function(){
		document.location.reload();
	},2000);
}
function ptoREST(data) {
   var t = data.replace("DONE","");
   var obj = {};
   var r = t.split(" ");
   for (var i=0;i<r.length;i++) {
      var p = r[i].split(":");
      if (p[0]) obj[p[0]] = p[1];
   }
   return obj;
}
function dteToStr(dte){
	var s="";
	s+=dte[2].split(":")[1].slice(-2);
	s+="/";
	s+=dte[1].split(":")[1].slice(-2);
	s+="/";
	s+=dte[0].split(":")[1].slice(-4);
	s+=" ";
	s+=dte[3].split(":")[1].slice(-2);
	s+=":";
	s+=dte[4].split(":")[1].slice(-2);
	s+=":";
	s+=dte[5].split(":")[1].slice(-2);
	return s;
}


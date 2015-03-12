function getPortTypeDesc(i)
{
	if(ports[i][1]=="DI") return "Digital Input";
	else if(ports[i][1]=="DO") return "Digital Output";
	else if(ports[i][1]=="AO") return "Analog Output";
	else if(ports[i][1]=="AI") return "Analog Input";
	else return "Virtual Port";
}
function isvisible(id) {
   return ((ports[id][3].indexOf("M")>0)||(ports[id][3].indexOf("C")>0));
}
function isinconfig(id) {
   return (ports[id][3].indexOf("C")>0);
}
function isenabled(id) {
   return ((ports[id][3].indexOf("X")==-1));
}
function isdigital(id) {
   return (id<16);
}
function isanalog(id) {
   return (id >= 16 && id <= 19);
}
function isvirtual(id) {
   return (id > 19);
}
function isType(t){
	return ports[portid][1].indexOf(t)>=0;
}

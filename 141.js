function createMDB_menu(){
clearMenu();
var p=ports[portid][6].split(" ");
addMenuItem("label","helpitem",MDB_HI);
addMenuItem("mbdir","mbi","Direction",cSF("direction",p[0],["ai","ao","di","do"],["Analog Input","Analog Output","Digital input","Digital output"]));
var sa="[";for(var i=1;i<247;i++)sa+="'"+i+"',";sa+="'247']";
var a=eval(sa);
addMenuItem("mbadd","mbi","Address",cSF("address",p[1],a));
addMenuItem("mbreg","mbi","Register",cIF("register","text",p[2],"0x[0-9A-F]{4}"));
addMenuItem("mbbau","mbi","Baud rate",cSF("baud",p[3],[1200,2400,4800,9600,19200,38400,57600,115200]));
addMenuItem("mbpar","mbi","Parity",cSF("parity",p[4],["n","e","o"]));
addMenuItem("mbstp","mbi","Stop bits",cSF("stop",p[5],["1","2"]));
addMenuItem("mbfun","mbi","Function code",cSF("funct",p[6],["3","4","6"]));
addMenuItem("mbdtt","mbi","Data type",cSF("datatype",p[7],["ui8","i16","ui16","i32","ui32","i64","ui64","float32","msb_i32","msb_ui32","msb_float32","msb_i64","msb_ui64"]));
}


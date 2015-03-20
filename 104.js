function setLDate(id)
{var dte=send_command("dte+show").split(" ");
var d=dteToStr(dte);
ID(id).innerHTML="Current system date: "+d;
}
function setIntervalRefreshDate(id){
setLDate(id);
var intv=setInterval(function(){setLDate(id);},10000);
return intv;
}
function saveNTP(){send_command("dte+ntp");alert("NTP configured!");}
function saveDateTime(v){
var rx=/^([0-9]{2})\/([0-9]{2})\/([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/g;
var m=rx.exec(v);
if(m==null||m.length!=7)
{alert("Expected format: dd/mm/yyyy HH:MM:SS!");return false;}
var cmd="dte+"+m[3]+m[2]+m[1]+m[4]+m[5]+m[6];
send_command(cmd);
alert("Date configured");
return true;
}

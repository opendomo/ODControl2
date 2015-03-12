var rx_ip='^(([01]?[0-9]?[0-9]|2([0-4][0-9]|5[0-5]))\.){3}([01]?[0-9]?[0-9]|2([0-4][0-9]|5[0-5]))$';
var rx_ttg='^[*0-1][*0-9]/[*0-3][*0-9] [*0-2][*0-9]:[*0-5][*0-9]:[*0-5][*0-9]$';
var rx_dtg='^[a-z][a-z][a-z] [0-2][0-9]:[0-6][0-9]:[0-6][0-9]$';
var rx_time='^20[0-9][0-9]/[0-1][0-9]/[0-3][0-9] [0-2][0-9]:[0-5][0-9]:[0-5][0-9]$';
var rx_str='^[a-zA-Z0-9]+$';
var rx_str5='^[a-zA-Z0-9]{5}$';
var rx_num='^[0-9]{5}$';

var port_visible = "h";
var port_visible_config = "";
var port_enabled = 1;
var port_analog = 0;
var portid = 0;

var context = "";


// http://www.opendomo.com/wiki/index.php?title=Comandos_de_ODControl#Enlazar_puertos_.28lnk.29
var lnktypes =    ["d",      "i",     "p", "P",     "c",      "r",      "t",        "s",    "2",     "3",    "l",   "b",    "k", "n", "N","o","f"];
var lnktypes_desc =  ["direct", "invers","pulse", "inmediate pulse", "change", "return", "t-return", "self", "double", "triple", "long", "boot", "interlink","Up-counter", "Down-counter", "Set ON", "Set OFF"];





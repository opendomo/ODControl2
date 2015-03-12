var grptypes      = ["and","nand","or","nor","xor","not","add","sub","mul","div","max","min"];
var grptypes_desc    = ["and","nand","or","nor","xor","not"," + "," - "," x "," / ","max","min"];

var trgtypes = ["cmpeq","cmpne","cmpgt","cmplt","cmpge","cmple"];
var trgtypes_desc = ["==","!=",">","<",">=","<="];

var tags       = ["untag","l","c","s","e"];
var tags_desc  = ["none", "light","climate","security","energy"];

var analogtype = ["a1","a2","a3","a4","a5","a6","a7","a8"];
var analogtype_desc = ["0-10V", "1-10V","0-11V","1-11V","0-20mA","4-20mA","0-21mA","4-21mA"];

/**
 * Loads the specified CSS resource
 * @param filename Path to the file
 */
function loadCSSfile(filename){
   var fileref=document.createElement("link");
   fileref.setAttribute("rel", "stylesheet");
   fileref.setAttribute("type", "text/css");
   fileref.setAttribute("href", filename);
   document.getElementsByTagName("head")[0].appendChild(fileref);
}



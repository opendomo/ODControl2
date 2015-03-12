function HME2()
{
   document.location="http://"+document.location.hostname+":"+nport;
}
function addMenuItem(id,classname,label,rawcontents,callback){
   var menuitem = document.createElement("li");
   menuitem.setAttribute("class",classname);
   menuitem.setAttribute("id",id);
   menuitem.appendChild(document.createTextNode(label));
   if (callback) menuitem.onclick=callback;
   if (rawcontents) menuitem.appendChild(rawcontents);
   document.getElementById("menu").appendChild(menuitem);
}

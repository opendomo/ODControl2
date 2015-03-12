function showfrm(){ID("aux").className="frm";}

function clearMenu() {
   var d = ID("b");
   d.innerHTML = "";
   var m = document.createElement("ul");
   m.setAttribute("id","menu");
   d.appendChild(m);
}  
function createProgressField(id,value,maximum) {
   var input = document.createElement("progress");
   input.setAttribute("id",id);
   input.setAttribute("value",value);
   input.setAttribute("max",maximum);
   input.setAttribute("min",0);
   return input;
}  


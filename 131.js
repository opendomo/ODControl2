function errorHandler(e) {
   console.log("Runtime error. Reloading menu.");
   loadMenu();
}

function getPortId(pname) {
   for (var i=0;i<ports.length;i++) {
      if (ports[i][0]==pname) return i;
   }
   return -1;
}
function showHidePanel(id) {
   var p = ID(id);
   if (p) {
      if (p.style.display != "block") {
         p.style.display = "block";
      } else {
         p.style.display = "none";
      }
   }
}
function loadLinksInfo() {
   var xmlhttpLLN = send_command("lln");
   var total = 0;

   mylinks = new Array();
   var raw_links = new Array();

   var response = xmlhttpLLN.replace(/\\nDONE/,"");
   raw_links = response.split("\\n");
   for (var i=0;i<raw_links.length;i++) {
      if (raw_links[i].indexOf(":")>0) {
         var s = raw_links[i].split(":");
         mylinks[i]=new Array(s[0],s[1],s[2], "");
         total++;
      }
   }
   return total;
}

function initmsg (){
   var a = ID("alertbox");
   var b = ID("alertbgnd");

   if (!b) {
      b = document.createElement("div");
      b.setAttribute("id","alertbgnd");
      b.addEventListener("click", hidealert);
      document.body.appendChild(b);
   }
   if (!a) {
      a = document.createElement("div");
      a.setAttribute("id","alertbox");
      a.addEventListener("click", hidealert);
      document.body.appendChild(a);
   }
   return a;
}


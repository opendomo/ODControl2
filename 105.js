
function loadJSfile(filename){
   var fileref=document.createElement('script');
   fileref.setAttribute("type","text/javascript");
   fileref.setAttribute("src", filename);
   document.getElementsByTagName("head")[0].appendChild(fileref);
}
/**
 * Return an array of ports with the specified types
 *    
 * @param t Array of types
 * @returns Array of port names
 * */       
function getPortListByType(t){
   var pt = "";
   if (t==undefined) t=[];
   var ret = [];
   for(var i = 0; i < ports.length; i++) {
      pt = ports[i][1];
      pn = ports[i][0];
      if (pn[0]!="$" && pt!="XV"){
         if (t.length == 0){
            ret.push(pn);
         } else {
            for (var k=0;k<t.length;k++){
               if (pt==t[k]) {
                  ret.push(pn);
               }
            }
         }
      }
   }
   return ret;
}


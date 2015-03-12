function loadPortsMenu() {
   try {
      context="ports";
      clearMenu();
      for (var i=0;i<ports.length;i++) {
         if (ports[i][0].indexOf("$")==-1){
            try {
					var e=cIF("pt"+ports[i][1],"text",ports[i][0]);
					SA(e,"readonly","");
               addMenuItem(i,"menuitem type"+ports[i][1], 
						getPortTypeDesc(i), e, function(){displayPortDetails(this.id);});
            }catch (e){console.log("Error in element "+ i);}
         }
      }
		addToolbarSaveCancelHelp(null,loadMenu);

   } catch (e) {
      errorHandler(e);
   }
}


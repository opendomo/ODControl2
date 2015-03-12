function createRDV(){
   try { 
      clearMenu();
		addMenuItem("label","helpitem",RDV_HI);
      addMenuItem("cperport","menuitem", "Name", 
            cIF("varportval","text",ports[portid][0],"[a-z0-9]{5}"));
      addToolbarSaveCancelHelp(function (){
         var va = ID("varportval");
         var value = va.value;
         send_command("lbl+"+ ports[portid][0]+ " " + value);
         send_command("rdv+"+ value);
         ports[portid][0] = value;
         loadPortsInfo(ports[portid][0]);
         displayPortDetails(portid);   
      },function(){displayPortDetails(portid);},"rdv");
   } catch (e) {
      errorHandler(e);
   }     
}

